import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
    deleteFromIndividualList,
    sortDateDescend,
    sortDateAscend,
    sortByAlphabetReverse,
    sortByAlphabet,
} from "../features/globalSlice";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import dayjs from "dayjs";

export default function EmployeeTable() {
    const employees = useSelector((state) => state.employees.employees);
    const [sortDate, setSortDate] = useState(true);
    const [sortMerchant, setSortMerchant] = useState(true);
    const [sortTotal, setSortTotal] = useState(true);
    const [sortStatus, setSortStatus] = useState(true);
    const [sortText, setSortText] = useState(true);

    const dispatch = useDispatch();

    const handleSortDate = () => {
        if (sortDate) {
            setSortDate(false);
            dispatch(sortDateAscend());
        } else {
            setSortDate(true);
            dispatch(sortDateDescend());
        }
    };
    const handleSort = () => {
        if (sortMerchant) {
            setSortMerchant(false);

            dispatch(sortByAlphabet());
        } else {
            setSortMerchant(true);

            dispatch(sortByAlphabetReverse());
        }
    };
    const handleSortText = () => {
        if (sortText) {

            setSortText(false);

            dispatch(sortByAlphabet());
        } else {

            setSortText(true);

            dispatch(sortByAlphabetReverse());
        }
    };
    const handleSortTotal = () => {
        if (sortTotal) {

            setSortTotal(false);
            dispatch(sortByAlphabet());
        } else {

            setSortTotal(true)
            dispatch(sortByAlphabetReverse());
        }
    };
    const handleSortStatus = () => {
        if (sortStatus) {

            setSortStatus(false);

            dispatch(sortByAlphabet());
        } else {

            setSortStatus(true);

            dispatch(sortByAlphabetReverse());
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font w-full h-full relative">


                <div className=" w-full">
                    <div className="overflow-auto sm:-mx-6 lg:-mx-8">
                        <div className="  sm:px-6 lg:px-8">
                            <div className="">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="border-b bg-gray-100">
                                        <tr>

                                            <th
                                                onClick={handleSortDate}
                                                scope="col"
                                                className="text-base lg:text-sm  font-medium text-gray-900 px-6 py-4 text-left items-center "
                                            // style={{ width: '200px' }}
                                            >
                                                Date
                                                <button>
                                                    {
                                                        sortDate === false ?
                                                            <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                                    }
                                                </button>
                                            </th>
                                            <th
                                                onClick={handleSort}
                                                scope="col" className="text-base lg:text-sm  font-medium text-gray-900 px-6 py-4 text-left flex">
                                                Merchant
                                                <button>
                                                    {
                                                        sortMerchant === false ?
                                                            <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                                    }
                                                </button>
                                            </th>


                                            <th
                                                onClick={handleSortTotal}
                                                scope="col" className="text-base lg:text-sm  font-medium text-gray-900 px-6 py-4 text-left inline-">
                                                Total

                                                <button>
                                                    {
                                                        sortTotal === false ?
                                                            <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                                    }
                                                </button>
                                            </th>
                                            <th
                                                onClick={handleSortStatus}
                                                scope="col" className="text-base lg:text-sm  font-medium text-gray-900 px-6 py-4 text-left inline-flex">
                                                Status

                                                <button>
                                                    {
                                                        sortStatus === false ?
                                                            <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                                    }
                                                </button>
                                            </th>
                                            <th
                                                onClick={handleSortText}
                                                scope="col" className="text-base lg:text-sm font-medium text-gray-900 px-6 py-4 text-left items">
                                                {'Comment'}
                                                <button>
                                                    {
                                                        sortText === false ?
                                                            <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                                    }
                                                </button>

                                            </th>
                                            <th
                                                onClick={handleSort}
                                                scope="col" className="text-base lg:text-sm  font-medium text-gray-900 px-6 py-4 text-left">
                                                Action

                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody className="bg-white whitespace-nowrap w-full">
                                        {employees.map((employee) => {
                                            const { id, date, merchant, total, status, text } = employee;
                                            console.log("🚀 ~ file: EmployeeTable.jsx ~ line 171 ~ {employees.map ~ merchant", merchant)

                                            return (
                                                <tr key={id} className="border-b">
                                                    <td className="text-base lg:text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {dayjs(date).format("DD/MM/YYYY")}
                                                    </td>
                                                    <td className="text-base lg:text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap"

                                                    >
                                                        {merchant}
                                                    </td>
                                                    <td className="text-base lg:text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {total}
                                                    </td>
                                                    <td className="text-base lg:text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                        style={status === 'New' ? { color: 'red' } : null || status === 'In progress' ? { fontStyle: 'italic', fontWeight: 'bold' } : null || status === 'Reimbursed' ? { color: 'green' } : null}
                                                    >
                                                        {status}
                                                    </td>
                                                    <td className="text-base lg:text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {text}
                                                    </td>
                                                    <td
                                                        onClick={() =>
                                                            dispatch(deleteFromIndividualList(employee))
                                                        }
                                                        className="text-lg font-light px-6 py-4 whitespace-nowrap  text-red-500 text-center flex justify-center items-center">

                                                        {<AiFillDelete />}

                                                    </td>

                                                </tr>

                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section >
        </div >
    );
}
