import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import dayjs from 'dayjs';
import {
    filterChecked,
    filterCheckedInProgress,
    filterCheckedReimbursed,
} from "../features/globalSlice";

export const categories = ["New", "In progress", "Reimbursed"];

const FilterExpense = () => {
    const employees = useSelector((state) => state.employees.employees);
    // const { filterEmployees } = useSelector((state) => state.employees);
    // console.log("🚀 ~ file: FilterExpense.jsx ~ line 22 ~ FilterExpense ~ filterEmployees", filterEmployees)

    const [filter, setFilter] = useState(employees);
    const [isChecked, setIsChecked] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        setFilter(filter);
    }, [filter]);

    const newChecked = () => {
        if (isChecked) {
            dispatch(filterChecked());
        } else {
            setFilter(filter);
            setIsChecked(!isChecked);
        }
    };
    const newChecked2 = () => {
        dispatch(filterCheckedInProgress());
    };
    const newChecked3 = () => {
        dispatch(filterCheckedReimbursed());
    };

    return (
        <section className="px-8 mt-8 w-full h-screen lg:h-full ">
            <div className="">
                <div className="flex justify-between items-center mb-2">
                    <p className="">Filter Expenses</p>
                    <p className="text-blue-500">
                        <button>Clear Filters</button>
                    </p>
                </div>
                <hr />
                <form className="w-full max-w-lg text-sm ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-Total"
                            >
                                From
                            </label>

                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-Total"
                                type="date"
                                placeholder=""
                            />
                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-Total"
                            >
                                To
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-Total"
                                type="date"
                                placeholder=""
                            />
                        </div>
                        <div className="flex w-full items-center gap-2 justify-between mt-3">
                            <div className="w-full pl-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Min
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="tel"
                                    placeholder="N"
                                />
                            </div>
                            <div>-</div>
                            <div className="w-full pr-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Max
                                </label>
                                <input
                                    className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="tel"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-state"
                            >
                                Merchant
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" flex-wrap flex">
                            <label className="label cursor-pointer gap-2">
                                <input
                                    defaultChecked={!isChecked}
                                    onChange={newChecked}
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                />
                                <span className="label-text ">New</span>
                            </label>
                            <label className="label cursor-pointer gap-2">
                                <input
                                    onChange={newChecked2}
                                    // value={category}
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                />
                                <span className="label-text ">In progress</span>
                            </label>
                            <label className="label cursor-pointer gap-2">
                                <input
                                    onChange={newChecked3}
                                    // value={category}
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                />
                                <span className="label-text ">Reimbursed</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FilterExpense;
