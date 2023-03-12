import React from 'react'
import User from "../../Assets/user.jpg";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

const ProfileCard = () => {
  return (
    <div className="flex flex-row h-32 w-[250px] sm:w-[580px] justify-center mt-8 rounded-lg bg-white ">
      <div className="flex flex-col w-full items-center sm:items-start">
        <div className="flex flex-wrap justify-center sm:left-10 sm:justify-start h-12 w-20 relative -top-8">
          <div className="profile-image flex justify-center sm:justify-left">
            <img src={User} className="h-20 w-20 rounded-full shadow-2xl border-white ring-white ring-4" alt=":(" />
          </div>
        </div>
        <div className="flex flex-col sm:justify-start">
          <div className="flex flex-col sm:items-start sm:pl-6 sm:justify-start">
            <h3 className="text-2xl">Berkay Erdinc</h3>
          </div>
          <div className="social flex flex-col sm:flex-row w-full items-center justify-start px-6">
            <h3 className="text-xs">hi@berkayerdinc.com</h3>
            <div className="flex flex-row justify-center sm:justify-start py-3">
              <FaIcons.FaFacebook className="text-xs sm:text-xl mx-2 hover:text-blue-600" />
              <FaIcons.FaInstagram className="text-xs sm:text-xl mx-2 hover:text-blue-600" />
              <FiIcons.FiTwitter className="text-xs sm:text-xl mx-2 hover:text-blue-600" />
              <FaIcons.FaLinkedin className="text-xs sm:text-xl mx-2 hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;