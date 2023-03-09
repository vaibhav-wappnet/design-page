import React from 'react'
import CreateButton from "./CreateButton";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";

import Logo from '../../Assets/Logo.png'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar scrollbar-thin scrollbar-thumb-blue-600 fixed top-0 min-h-screen overflow-y-auto w-[308px] bg-white">

                {/* Logo */}
                <div className="logo h-[95px] w-[269px] top-0 right-[15px]">
                    <img className=" absolute w-[202.37px] top-[47px] left-[40px] h-[35px]" src={Logo} alt="" />
                </div>

                {/* Create Button */}
                <CreateButton />

                {/* Menu  Items*/}
                <Menu />

                {/* Footer Menu item */}
                <MenuFooter />
            </div>
        </div >
    )
}

export default Sidebar;