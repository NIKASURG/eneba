const express = require('express')
const app = express()
const port = 3000
const https = require('https');
const fs = require('fs');
const cors = require('cors');
app.use(cors());
const options = {
    key: fs.readFileSync('./certs/privkey.pem'),
    cert: fs.readFileSync('./certs/fullchain.pem')
};

const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,
});

async function fuzzySearch(searchTerm) {
    try {
        await pool.query("SET pg_trgm.similarity_threshold = 0.1");
        let res
        if (searchTerm === '') {
            const sql = `
            SELECT *
            FROM games;
            `;
            res = await pool.query(sql);

        } else {

            const sql = `
            SELECT *, similarity(title, $1) AS match_score
            FROM games
            WHERE 
            title % $1                      
            OR title ILIKE '%' || $1 || '%' 
            ORDER BY match_score DESC;
            `;
            res = await pool.query(sql, [searchTerm]);

        }

        if (res.rows.length !== 0) {
            return res.rows
        } else {
            return []
        }


    } catch (err) {
        console.error("ERROR:", err.message);
    }
}

app.get('/list', async (req, res) => {
    const search = req.query.search || '';
    const ats = await fuzzySearch(search)
    res.json(ats)
})

https.createServer(options, app).listen(port, () => {
    console.log(`API is running on port ${port}`);
});