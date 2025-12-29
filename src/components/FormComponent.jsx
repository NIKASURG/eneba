function FormComponent({ searchValue, setSearchValue, handleSearch, handleClear }){

    return (
            <form onSubmit={handleSearch} >
                <div className="flex w-[550px] h-[55px] border-2 border-gray-200 items-center justify-center m-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="m-2.5">
                        <g clipPath="url(#svg-a569c57c2371d97aff5702b1d52a7c91__a)">
                            <path d="M17 17L22.7499 22.75" stroke="currentColor" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M1 10.25C1 12.7033 1.97455 15.056 3.70926 16.7907C5.44397 18.5254 7.79675 19.5 10.25 19.5C12.7033 19.5 15.056 18.5254 16.7907 16.7907C18.5254 15.056 19.5 12.7033 19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25Z"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                        </g>
                        <defs>
                            <clipPath id="svg-a569c57c2371d97aff5702b1d52a7c91__a">
                                <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>

                    <input aria-label="Paieška"
                           placeholder="Search for games, top-ups and more" autoComplete="off"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           autoCorrect="off"
                           className="w-[510px] h-full bg-[#4618ac] focus:outline-none text-lg font-bold "/>
                    {searchValue.length > 0 && (
                        <button type="button" className="m-3" aria-label="Išvalyti paieškos tekstą"
                                title="Išvalyti paieškos tekstą" aria-hidden="false"
                                onClick={handleClear}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                 className="w-[16px]"
                            >
                                <path fill="currentColor" fillRule="evenodd"
                                      d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"></path>
                            </svg>
                        </button>)}

                </div>

            </form>)
}
export default FormComponent;