import React from 'react'

const Profile = () => {
    return (
        <div className="profile-container sm:my-0 flex flex-col items-center justify-center rounded-lg bg-blue-600 h-[280px] w-[250px]">
            <div className="circle flex border-white justify-center items-center h-24 w-24 border-[10px] rounded-full">
                <h1 className="font-semibold text-white text-lg">
                    75%
                </h1>
            </div>

            <h1 className="mt-2 text-lg text-white">Complete Profile</h1>
            <div className="bottom px-4 mt-2 text-white">
                <h1 className="mb-2 text-[12px]">Log & upload all necessary information asked from you to complete your profile</h1>
                <button className="bg-white text-blue-600 text-xs font-semibold py-3 rounded-lg px-6">Add your business card</button>
            </div>
        </div>
    )
}

export default Profile;