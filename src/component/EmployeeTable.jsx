import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteFromIndividualList, sortDateDescend, sortDateAscend } from '../features/globalSlice';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import dayjs from 'dayjs';

export default function EmployeeTable() {
    const employees = useSelector((state) => state.employees.employees);
    const [sortDate, setSortDate] = useState(true);

    const dispatch = useDispatch();

    const handleSortDate = () => {
        if (sortDate) {
            setSortDate(false);
            dispatch(sortDateAscend())

        } else {
            setSortDate(true);
            dispatch(sortDateDescend())
        }

    };

    return (
        <div>


            <section className="text-gray-600 body-font lg:w-full w-screen ">
                <div className="container pb-10 lg:pt-6">

                    <div className=" w-full mx-auto overflow-auto h-[45rem] pb-32">
                        <table className="table-auto w-screen lg:w-full text-left whitespace-no-wrap overflow-auto">
                            <thead>
                                <tr>
                                    {
                                        sortDate === false
                                            ? <th
                                                onClick={handleSortDate}
                                                className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 fixed lg:relative w-[8rem] rounded-tl rounded-bl flex items-center gap-3">Date <button ><AiOutlineArrowUp /></button>

                                            </th>
                                            : <th
                                                onClick={handleSortDate}
                                                className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 fixed lg:relative w-[8rem] rounded-tl rounded-bl flex items-center gap-3">Date <button><AiOutlineArrowDown /></button>

                                            </th>
                                    }
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 pl-[9rem] lg:pl-4">Merchant</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Comment</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Action</th>

                                </tr>
                            </thead>
                            <tbody className='bg-white w-screen whitespace-nowrap'>
                                {employees.map((employee) => {
                                    const { id, date, merchant, total, status, text } = employee
                                    return <tr key={id}>
                                        <td
                                            className="px-4 border-t-2 fixed lg:relative w-[8rem] shadow-transparent  border-gray-200 py-3 bg-white h-fit">{dayjs(date).format('DD/MM/YYYY')}</td>
                                        <td className="px-4 border-t-2 border-gray-200 py-3 pl-[9rem] lg:pl-4">{merchant}</td>
                                        <td className="px-4 border-t-2 border-gray-200 py-3">{total}</td>
                                        <td className="px-4 border-t-2 border-gray-200 py-3">{status}</td>
                                        <td className="px-4 border-t-2 border-gray-200 py-3 ">{text}  </td>
                                        <td
                                            onClick={() => dispatch(deleteFromIndividualList(employee))}
                                            className="px-4 border-t-2 border-gray-200 py-3 text-red-500 text-center flex justify-center items-center">
                                            {<AiFillDelete />}
                                        </td>

                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                    {/* <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div> */}
                </div>
            </section>

        </div>
    );
}






