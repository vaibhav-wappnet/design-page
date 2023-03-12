import React from "react";
import * as AiIcons from "react-icons/ai"
import * as AIcons from "react-icons/ai"


const TableData = [
    {
        id: 1,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-center border-b my-4 h-8 rounded-lg bg-orange-300 text-orange-600 text-xs",
        icon: <AiIcons.AiOutlineFieldTime />,
        status: "Peniding",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 2,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-center my-4 h-8 rounded-lg bg-red-300 text-red-600 text-xs",
        icon: <AiIcons.AiOutlineInfoCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 3,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-center my-4 h-8 rounded-lg bg-green-300 text-green-600 text-xs",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 4,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-center my-4 h-8 rounded-lg bg-green-300 text-green-600 text-xs",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
    {
        id: 5,
        input: "Invoice #0034 - Jun 2022",
        billingDate: "24 Jun,2022",
        className: "flex items-center justify-center my-4 h-8 rounded-lg bg-green-300 text-green-600 text-xs",
        icon: <AiIcons.AiOutlineCheckCircle />,
        status: "Paid",
        amount: "$99.99",
        plan: "Basic - 1 License"
    },
]

export default TableData;