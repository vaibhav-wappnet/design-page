import React, { useState } from 'react'
import CreateButton from "./CreateButton";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";

import Logo from '../../Assets/Logo.png'

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const clickHandler = () => {
        setShowSidebar(!showSidebar);
    }


    return (
        <div className="flex flex-col">

            <div className="text-center fixed">
                <button type="button" onClick={clickHandler} className="inline-flex items-center p-1 mt-2 ml-2 text-sm text-blue-500 hover:bg-blue-500 transition-all sm:p-2 ms:mt2 sm:text-xs hover:text-white rounded-lg bg-white">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>

            <div className={showSidebar
                ?
                'fixed top-0 left-0 z-40 h-screen w-full sm:w-64 p-2 overflow-y-auto transition-transform -translate-x-0 bg-white  scrollbar-thin scrollbar-thumb-blue-600'
                :
                'hidden'} tabIndex="-1">

                {/* Logo */}
                <div className="logo flex flex-row items-center justify-between mx-2 h-[90px]">
                    <img className="h-[25px]" src={Logo} alt="" />
                    <button className="w-8 h-8 rounded-md transition-all bg-slate-200 hover:bg-blue-600 hover:text-white" onClick={clickHandler}>
                        X
                    </button>
                </div>

                {/* Create Button */}
                <CreateButton />

                {/* Menu  Items*/}
                <Menu />

                {/* Footer Menu item */}
                <MenuFooter />
            </div>
        </div>
    )
}

export default Sidebar;