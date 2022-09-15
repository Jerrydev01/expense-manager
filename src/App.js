import React, { useState} from 'react';

import Header from "./component/Header";
import ExpenseTable from "./component/ExpenseTable";
import { ExpenseAmount } from "./component/ExpenseAmount";
import FilterExpense from './component/FilterExpense';
import { useSelector, useDispatch } from 'react-redux';

import AddForm from './component/AddForm';
import { AiOutlinePlus } from "react-icons/ai";
import {
  filterChecked,
} from "./features/globalSlice";



function App() {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  // const [newCheck, setNewCheck] = useState(checked)
  const [newCheck, setNewCheck] = useState(
    employees);
  const status = employees.map(employee => employee.status);
  const filterStatus = status.filter(employee => employee);
  console.log(filterStatus)

  const newChecked = () => {
    if ( filterStatus[0] === 'new') {
      dispatch(filterChecked())

    } else {
    
    }
  };


  return (

    <main className="fixed w-full overflow-y-hidden">
      <div className="">
        <Header />
      </div>
      <section className="flex lg:flex-row lg:h-screen flex-col-reverse lg:px-5">
        <div className="lg:w-[25%]  hidden lg:block">
          <FilterExpense
            newChecked={newChecked}
            defaultChecked={newCheck}
            changeCheck={() => setNewCheck(!newCheck)}
          />
        </div>
        <div className="lg:w-[55%] lg:shadow-lg shadow-2xl h-screen">
          <ExpenseTable />
        </div>
        <div className="lg:w-[20%]">
          <ExpenseAmount />
        </div>
      </section>
      <label htmlFor="my-modal" className=" p-3 rounded-full bg-red-500 w-fit text-white font-semibold absolute top-[65%] lg:top-[80%] right-[10%] z-20 "><AiOutlinePlus /></label>



      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal overflow-hidden">
        <div className="lg:modal-box lg:w-[70%] modal-box w-[80%] max-w-4xl overflow-hidden">
          <AddForm />
          <div className="modal-action">
            <label htmlFor="my-modal" className="bg-gray-600 text-white py-1 px-2 rounded-md">Close</label>
          </div>
        </div>
      </div>

    </main>

  );
}

export default App;
