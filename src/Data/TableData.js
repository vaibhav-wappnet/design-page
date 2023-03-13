import React from "react";
import * as AiIcons from "react-icons/ai"


const TableData = [
    {
        id: 1,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-evenly my-2 h-6 rounded-md bg-orange-200 text-orange-600 sm:text-sm text-[8px]",
        icon: <AiIcons.AiOutlineFieldTime />,
        status: "Pending",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 2,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-evenly my-2 h-6 rounded-md bg-red-200 text-red-600 sm:text-sm text-[8px]",
        icon: <AiIcons.AiOutlineInfoCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 3,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-evenly my-2 h-6 rounded-md bg-green-200 text-green-600 sm:text-sm text-[8px]",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 4,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-evenly my-2 h-6 rounded-md bg-green-200 text-green-600 sm:text-sm text-[8px]",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 5,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-evenly my-2 h-6 rounded-md bg-green-200 text-green-600 sm:text-sm text-[8px]",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
]

export default TableData;