import React from 'react'

const Notification = () => {
    return (
        <div className="notification mt-8 flex flex-col h-[528px] w-[300px] bg-white rounded-lg">
            <div className="card-header flex flex-row items-center justify-between px-4 mt-6">
                <h1 className="text-xl">Notification</h1>
                <button className="bg-slate-200 rounded-lg p-2">View All</button>
            </div>
            <div className="input-field mt-6 px-4">
                <div className=" flex flex-row relative items-center border rounded-md">
                    <p className="text-[14px] text-slate-500 w-full">Select Agent</p>
                    <select className="appearance-none w-full border border-none py-3 px-4 pr-8 leading-tight outline-none" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="line px-4 flex flex-row justify-between items-center">
                <span className="">TODAY</span>
                <hr className="h-px w-[204px] my-6 bg-gray-200 border-0" />
            </div>

            {/* event box */}
            <div className="event-box flex flex-col h-[136px] bg-slate-200 rounded-md mx-4">
                <h1></h1>
            </div>
        </div>
    )
}

export default Notification;