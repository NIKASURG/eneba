function GameCard({game}) {
    const iconName = game.platform.split(' ')[0];
    return (<div className="relative h-[570px] border-solid border-[#63e3c2] border-spacing-1.5 border bg-[#1f0a4d]">
            <div className="">

                <img src={'https://eneba.urg.lt/photos/' + game.image_url} alt={game.image_url}
                     className='w-full '></img>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[180px] bg-[#1f0a4d] ">

                <div className="-translate-y-6 h-full">
                    <div className="flex flex-row -translate-y-10 fixed bg-[#63e3c2] text-black h-8 items-center">
                        <img src={"https://eneba.urg.lt/photos/svg/cashback.svg"} className=" ml-1 h-4 mr-1 my-1"
                             alt={game.platform}/>
                        <p className="font-bold text-sm mr-1">CASHBACK</p>
                    </div>
                    <div
                        className="flex flex-row backdrop-blur backdrop-brightness-50 backdrop-blur-sm justify-center items-center ">
                        <img src={"https://eneba.urg.lt/photos/svg/" + iconName + ".svg"} className="h-4 mr-1 my-1"
                             alt={game.platform}/>
                        <p className='flex justify-center font-bold text-xs'>{game.platform}</p>
                    </div>


                    <div className="flex flex-col relative h-full font-bold mx-4 max-h-64 z-10 ">


                        <p className='text-xs mt-3 mb-2'>{game.title}</p>
                        <p className='text-[#23c299] text-xs'> {game.region}</p>
                <div className='absolute bottom-0 mb-3'>

                        <div className="flex flex-row text-xs text-gray-400  ">
                            <p>From </p>
                            {game.discount_percent > 0 && (<div className="flex justify-center">

                                    <p className='line-through mr-1 ml-1 '> €{game.price_in_cents / 100}</p>
                                    <p className='text-[#84e916] '>-{game.discount_percent}% </p>
                                </div>

                            )}
                        </div>
                        <p className='text-2xl'>
                            €{((game.price_in_cents * (100 - game.discount_percent) / 100) / 100).toFixed(2)}
                        </p>
                        <p className='text-[#84e916] text-xs'>Cashback: €{(game.cashback_cents / 100).toFixed(2)}</p>
                        <div className="flex flex-row text-xs items-center text-gray-400 ">
                            <img src="https://eneba.urg.lt/photos/svg/love.svg" className="h-4 mr-1 my-1 "
                                 alt={game.platform}/>
                            <p>{game.likes_count}</p>
                        </div>

</div>
                    </div>
                </div>

            </div>

        </div>)
}

export default GameCard;
