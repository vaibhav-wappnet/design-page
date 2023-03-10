import React from 'react'
import Logo from "../../Assets/Logo.png"

const RemaxAbout = () => {
    return (
        <div className=" flex flex-col justify-center items-center h-[300px] w-[300px] rounded-lg bg-white">
            <div className="image h-[24px] w-[129px]">
                <img src={Logo} alt="" />
            </div>
            <div className="card-body text">
                <p>Brokerage</p>
                <h1>RE/MAX Hallmark</h1>
            </div>
            <div className="card-footer flex flex-col mt-8 px-4 items-center">
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