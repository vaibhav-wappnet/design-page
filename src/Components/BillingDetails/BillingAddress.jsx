import React from 'react'
import * as CiIcons from "react-icons/ci";
import * as GoIcons from "react-icons/go";

const BillingAddress = () => {
    return (
        <div className="payment-method flex flex-col p-4 h-[200px] w-[290px] bg-white mt-9 rounded-lg">
            <div className="title flex flex-col items-start">
                <h1 className="text-md font-semibold">Billing Address</h1>
                <p className="text-xs">Change or edit billing address</p>
            </div>
            <div className="card-body px-2 flex flex-row mt-3 py-2 items-center justify-between border rounded-md">
                <CiIcons.CiLocationOn className="text-3xl p-1 text-blue-600 rounded-lg bg-slate-300" />
                <div className="flex flex-col items-start">
                    <h1 className="text-xs font-semibold">Re/Max Hallmark</h1>
                    <p className="text-[10px]">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <span><GoIcons.GoKebabVertical /></span>
            </div>
            <div className="card-footer my-6">
                <button className="bg-blue-600 text-white w-full py-2 rounded-lg">
                    Add New Address
                </button>
            </div>
        </div>
    )
}

export default BillingAddress;