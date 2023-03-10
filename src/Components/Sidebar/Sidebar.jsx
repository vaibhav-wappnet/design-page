import React from 'react'
import CreateButton from "./CreateButton";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";

import Logo from '../../Assets/Logo.png'

const Sidebar = () => {
    return (
        <div className="flex flex-col">

            <div className="flex fixed flex-col scrollbar-thin top-0 scrollbar-thumb-blue-600 h-[1080px] overflow-y-auto bg-white">

                {/* Logo */}
                <div className="logo flex flex-col justify-center mx-auto h-[90px] w-[200px]">
                    <img className=" h-[35px]" src={Logo} alt="" />
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