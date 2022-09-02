import React from 'react';

import EmployeeTable from './EmployeeTable';




const ExpenseTable = () => {
    // const employees = useSelector((state) => state.employees.employees);

    // const dispatch = useDispatch();
    // // useEffect(() => {
    // //     dispatch(employees);
    // // }, [dispatch]);


    return (

        <section className="text-gray-600 body-font lg:text-xs text-sm relative">
            <div className="mx-auto">
                 <EmployeeTable/>


            </div>
        </section >


    )
}

export default ExpenseTable