import React from 'react'
import TableData from '../../Data/TableData';
import * as HiIcons from "react-icons/hi"
import * as GoIcons from "react-icons/go"

const BillingTable = () => {
  return (
    <div className="flex flex-col bg-white m-4 rounded-lg">
      <div className="flex flex-col">
        <h1 className="flex items-start p-3">Billing and Invoicing</h1>
        <table className="table-auto bg-white overflow-y-auto scrollbar-thin text-sm scrollbar-thumb-blue-500">
          <thead className="bg-slate-200 py-4">
            <tr>
              <th className="py-3">
                <input type="checkbox" name="invoice" id="invoice" />
              </th>
              <th className="py-3">
                <span>Invoice</span>
              </th>
              <th className="py-3">Billing Date</th>
              <th className="py-3">Status</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Plan</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((data) => {
              return (
                <tr key={data.id} className="border-b">
                  <td className="p-3">
                    <input type="checkbox" name="idk" id={data.id} />
                  </td>
                  <td className="p-3">
                    <p>{data.input}</p>
                  </td>
                  <td className="p-5">{data.billingDate}</td>
                  <td className={data.className}>
                    <span>
                      {data.icon}
                    </span>{data.status}
                  </td>
                  <td className="p-3">{data.amount}</td>
                  <td className="p-3">{data.plan}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center justify-between mx-4">
        <div className="previous">
          <HiIcons.HiOutlineChevronLeft className="h-10 w-10 border rounded-lg p-3" />
        </div>
        <div className="pagination">
          <ul className="p-3">
            <div className="flex justify-center items-center">
              <li className="h-10 w-10 flex justify-center items-center rounded-lg text-blue-500 font-semibold bg-blue-100">1</li>
              <li className="h-10 w-10 flex justify-center items-center">2</li>
              <li className="h-10 w-10 flex justify-center items-center">3</li>
              <li className="h-10 w-10 flex justify-center items-center">5</li>
              <li className="h-10 w-10 flex justify-center items-center">5</li>
              <li className="h-10 w-10 flex justify-center items-center"><GoIcons.GoKebabHorizontal /></li>
              <li className="h-10 w-10 flex justify-center items-center">45</li>
            </div>
          </ul>
        </div>
        <div className="next">
          <HiIcons.HiOutlineChevronRight className="h-10 w-10 border rounded-lg bg-blue-500 text-white p-3" />
        </div>
      </div>
    </div>
  )
}

export default BillingTable;