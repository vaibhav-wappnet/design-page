import React from 'react'

const RemaxAbout = () => {
    return (
        <div className=" flex flex-col justify-center items-center sm:h-[300px] sm:w-[300px] h-[280px] w-[250px] rounded-lg bg-white">
            <div className="text-3xl sm:text-4xl font-extrabold text-red-600">
                <h1>
                    RE<span className="text-blue-800">/</span>MAX
                </h1>
            </div>
            <div className="card-body mt-4 w-full">
                <p className="text-sm sm:text-lg my-2">Brokerage</p>
                <h1 className="font-bold">RE/MAX Hallmark</h1>
            </div>
            <div className="card-footer flex flex-col mt-8 px-4 text-slate-600 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 items-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                4517 Washington Ave. Manchester, Kentucky 39495
            </div>
        </div>
    )
}

export default RemaxAbout;