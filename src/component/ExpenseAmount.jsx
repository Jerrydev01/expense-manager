import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalAmount } from "../features/globalSlice";
import FilterExpense from "./FilterExpense";
import { BsFilter } from "react-icons/bs";

//Money formatter function
function moneyFormatter(num) {
    let p = parseFloat(num).toFixed(2).split(".");
    return (
        "₦  " +
        p[0]
            .split("")
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
            }, "") +
        "." +
        p[1]
    );
}

export const ExpenseAmount = () => {
    const [filterMobile, setFilterMobile] = useState(false);
    const { employeeTotalAmount } = useSelector((state) => state.employees);

    const employees = useSelector((state) => state.employees.employees);

    const money = employees.map((employee) => employee.total);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalAmount());
    }, [money, dispatch]);

    const handleToggleMobileFilter = () => {
        if (filterMobile === true) {
            setFilterMobile(false);
        } else {
            setFilterMobile(true);
        }
    };

    return (
        <div className="">
            <div className="w-full p-7 flex justify-between">
                <div>
                    <p className="pb-2"> To be reimbursed</p>
                    <hr />
                    <h1 className="lg:text-[1.5rem] md:text-2xl font-bold lg:text-center lg:mt-7 mt-4">
                        {" "}
                        {moneyFormatter(+employeeTotalAmount)}
                    </h1>
                </div>
                <button
                    onClick={handleToggleMobileFilter}
                    className="flex gap-3  lg:hidden font-semibold text-lg text-blue-500"
                >
                    <h2 className="">Filter</h2>
                    <p className="pt-1">
                        <BsFilter />
                    </p>
                </button>
            </div>
            {filterMobile === true ? (
                <div className=" grid relative justify-center py-10 h-[35rem] place-content-center overflow-y-scroll  z-30">
                    <FilterExpense />
                </div>
            ) : null}
        </div>
    );
};
