import React from 'react'
import TableData from '../../Data/TableData';
import * as HiIcons from "react-icons/hi"
import * as GoIcons from "react-icons/go"

const BillingTable = () => {
  return (
    <div className="flex flex-col bg-white mt-9 w-[290px] sm:w-[600px] rounded-lg">
      <div className="flex flex-col">
        <h1 className="flex items-start text-xs sm:text-lg p-2 sm:p-3">Billing and Invoicing</h1>
        <table className="table-auto bg-white overflow-y-auto scrollbar-thin sm:text-[14px] text-[7px] scrollbar-thumb-blue-500">
          <thead className="bg-slate-200">
            <tr>
              <th className="py-2">
                <input type="checkbox" name="invoice" id="invoice" />
              </th>
              <th>
                <span>Invoice</span>
              </th>
              <th>Billing Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((data) => {
              return (
                <tr key={data.id} className="border-b">
                  <td className="py-3 px-2">
                    <input type="checkbox" className="p-3" name="idk" id={data.id} />
                  </td>
                  <td className="py-3 px-1">
                    <p>{data.input}</p>
                  </td>
                  <td className="py-3 px-1">{data.billingDate}</td>
                  <td className={data.className}>
                    <span>
                      {data.icon}
                    </span>{data.status}
                  </td>
                  <td className="py-3 px-1">{data.amount}</td>
                  <td className="py-3 px-1">{data.plan}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center justify-between mx-4">
        <div className="previous flex">
          <button>
            <HiIcons.HiOutlineChevronLeft className="h-7 w-7 border rounded-lg p-2" />
          </button>
        </div>
        <div className="pagination">
          <ul className="p-2 text-xs">
            <div className="flex justify-center items-center sm:text-sm sm:p-2 text-[9px]">
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center rounded-md text-blue-500 font-semibold bg-blue-100">1</button>
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center">2</button>
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center">3</button>
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center">4</button>
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center">5</button>
              <button className="h-5 w-5 sm:m-1 flex justify-center items-center"><GoIcons.GoKebabHorizontal /></button>
              <button className="h-5 w-5 sm:p-4 sm:m-1 flex justify-center items-center">45</button>
            </div>
          </ul>
        </div>
        <div className="next flex">
          <button>
            <HiIcons.HiOutlineChevronRight className="h-7 w-7 border rounded-lg bg-blue-500 text-white p-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BillingTable;