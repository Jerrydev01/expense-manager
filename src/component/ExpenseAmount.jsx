import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalAmount } from '../features/globalSlice';

//Money formatter function
function moneyFormatter(num) {
    let p = parseFloat(num).toFixed(2).split('.');
    return (
        '₦  ' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}


export const ExpenseAmount = () => {
    const { employeeTotalAmount } = useSelector((state) => state.employees);

    const employees = useSelector((state) => state.employees.employees);
    console.log(employees);

    const money = employees.map((employee) => employee.total);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalAmount());
    }, [money, dispatch]);



    return (
        <div className="w-full p-7">
            <div>
                <p className="pb-2"> To be reimbursed</p>
                <hr />
                <h1 className="text-3xl font-semibold text-center mt-7"> {moneyFormatter(employeeTotalAmount)}</h1>
            </div>
        </div>
    )
}

