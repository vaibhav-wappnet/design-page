import React from 'react'

import Profile from "../../Assets/user.jpg"

import * as GoIcons from "react-icons/go";
import * as CiIcons from "react-icons/ci";
import * as AiIcons from "react-icons/ai";

const Notification = () => {
    return (
        <div className="notification mt-8 flex flex-col my-5     px-4 h-[528px] w-[290px] bg-white rounded-lg">
            <div className="card-header flex flex-row items-center justify-between mt-6">
                <h1 className="text-xl">Notification</h1>
                <button className="bg-slate-200 rounded-lg p-2">View All</button>
            </div>
            <div className="input-field mt-6">
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
            <div className="line flex flex-row justify-between items-center">
                <span className="uppercase font-semibold">today</span>
                <hr className="h-px w-[204px] my-6 bg-gray-200 border-0" />
            </div>

            {/* event box */}
            <div className="event-box flex flex-col h-[136px] text-slate-600 shadow-lg px-4 rounded-md">
                <div className="card-title flex flex-row text-blue-500 my-1 font-semibold items-center">
                    <GoIcons.GoPrimitiveDot className=" flex mr-2 border-2 rounded-full border-blue-300" />
                    <p>Upcoming showing</p>
                </div>
                <div className="card-title flex flex-row justify my-1 center items-center">
                    <CiIcons.CiLocationOn className="flex mr-1 text-xl" />
                    <p className="text-[11px]">1901 Thornridge Cir. Shiloh, Hawaii..</p>
                </div>
                <div className="card-title flex flex-row justify my-1 center items-center">
                    <CiIcons.CiCalendarDate className="flex mr-1 text-xl" />
                    <p className="text-[11px]">Jun 10, 22</p>
                    <CiIcons.CiClock1 className="flex mx-1 text-xl" />
                    <p className="text-[11px]">Jun 10, 22</p>
                </div>
                <div className="profile font-semibold flex mt-1.5 justify-between">
                    <img src={Profile} className="h-7 w-7 rounded-full mr-2" alt="" />
                    <p>Berkay’s Tour</p>
                    <div className="msgs">
                        <div className="flex -space-x-3">
                            <img className="w-7 h-7 border-2 border-white rounded-full" src={Profile} alt="" />
                            <img className="w-7 h-7 border-2 border-white rounded-full " src={Profile} alt="" />
                            <img className="w-7 h-7 border-2 border-white rounded-full" src={Profile} alt="" />
                            <a className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-600 border-2 border-white rounded-full" href="#k">+8</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checked flex flex-col mt-4">
                <div className="completed flex flex-col justify-start items-start p-4 border rounded-lg">
                    <h1 className="flex flex-row items-center justify-start font-semibold">
                        <AiIcons.AiOutlineCheckCircle className="mr-2 text-green-500" />
                        Completed showing
                    </h1>
                    <p className="text-sm">Berkay's tour is complete!</p>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="line flex flex-row justify-between items-center">
                <span className="uppercase font-semibold">yesterday</span>
                <hr className="h-px w-[170px] my-6 bg-gray-200 border-0" />
            </div>

            {/* Mark as read */}
            <div className="footer">
                <button className="bg-slate-200 py-2 w-full font-semibold text-slate-700 rounded-lg transition-all hover:bg-slate-300">
                    Mark as Read
                </button>
            </div>
        </div>
    )
}

export default Notification;