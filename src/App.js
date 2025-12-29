import {useState, useEffect} from 'react';
import './index.css';

import HeaderComponent from './components/HeaderComponent';
import GameCard from './components/GameCard';

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [gamesdata, setData] = useState([]);

    const handleClear = () => {
        setSearchValue('');
    };

    const [loading, setLoading] = useState(false);


    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchValue.trim()) return;

        setLoading(true);
        try {
            console.log(`https://eneba.urg.lt:3000/list?search=${searchValue}`)
            const response = await fetch(`https://eneba.urg.lt:3000/list?search=${searchValue}`);
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.error("ERR:", error);

        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        setLoading(true);
        (async () => {


            try {
                console.log(`https://eneba.urg.lt:3000/list?search=${searchValue}`)
                const response = await fetch(`https://eneba.urg.lt:3000/list`);
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error("ERR:", error);

            } finally {
                setLoading(false);
            }

        })()


    }, []);
    return (

        <div className="flex h-screen bg-[#4618ac]  justify-center">
            <div className="flex flex-col items-center  w-[1200px] mt-6">
                <HeaderComponent searchValue={searchValue}
                                 setSearchValue={setSearchValue}
                                 handleSearch={handleSearch}
                                 handleClear={handleClear}/>
                <div className="flex flex-col w-full ">
                    {gamesdata.length > 0 && (
                        <p className="mt-10 mb-4">Resoults found: {gamesdata.length} </p>
                    )}
                    <div className=" grid grid-cols-4 gap-4">
                        {gamesdata.map(game =>
                            <GameCard key={game.id} game={game}></GameCard>
                        )}


                    </div>

                </div>
            </div>
            <div className="fixed right-0 bottom-0 text-black bg-white  "><p className="m-1">Report a problem</p></div>
        </div>
    );
}


export default App;
