import React from 'react'

const Profile = () => {
    return (
        <div className="profile-container flex flex-col items-center justify-center rounded-lg bg-blue-600 h-[350px] w-[250px]">
            <div className="circle mt-2 flex border-white mx-auto justify-center items-center h-28 w-28 border-[12px] rounded-full">
                <h1 className="font-semibold text-white text-xl">
                    75%
                </h1>
            </div>

            <h1 className="mt-4 text-lg text-white">Complete Profile</h1>
            <div className="bottom px-4 mt-2 text-white">
                <h1 className="mb-2 text-[14px]">Log & upload all necessary information asked from you to complete your profile</h1>
                <button className="bg-white text-blue-600 text-xs font-semibold py-4 rounded-lg px-10">Add your business card</button>
            </div>
        </div>
    )
}

export default Profile;