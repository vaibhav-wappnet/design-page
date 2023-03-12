import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'

const PaymentMethod = () => {
    return (
        <div className="payment-method flex flex-col mx-2 p-4 h-[200px] w-[250px] bg-white mt-9 rounded-lg">
            <div className="title flex flex-col items-start">
                <h1 className="text-md font-semibold">Payment Method</h1>
                <p className="text-xs">Change or edit your payment method</p>
            </div>
            <div className="card-body px-2 flex flex-row mt-3 py-2 items-center justify-between border rounded-md">
                <FaIcons.FaCcVisa className="ml-2 text-3xl text-indigo-900" />
                <div className="flex flex-col items-start">
                    <h1 className="text-xs font-semibold">Visa Ending in 4049</h1>
                    <p className="text-xs">Expiry 09/2027</p>
                </div>
                <span><GoIcons.GoKebabVertical /></span>
            </div>
            <div className="card-footer my-6">
                <button className="bg-blue-600 text-white w-full py-2 rounded-lg">
                    Add New Card
                </button>
            </div>
        </div>
    )
}

export default PaymentMethod;