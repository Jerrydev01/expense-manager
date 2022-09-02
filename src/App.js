import React from 'react';

import Header from "./component/Header";
import ExpenseTable from "./component/ExpenseTable";
import { ExpenseAmount } from "./component/ExpenseAmount";
import FilterExpense from './component/FilterExpense';


import AddForm from './component/AddForm';
import { AiOutlinePlus } from "react-icons/ai";

function App() {



  return (

    <main className="fixed w-full">
      <div className="">
        <Header />
      </div>
      <section className="flex lg:flex-row lg:h-screen flex-col-reverse px-5">
        <div className="lg:w-[25%]  hidden lg:block">
          <FilterExpense />
        </div>
        <div className="lg:w-[55%] shadow-lg h-screen">
          <ExpenseTable />
        </div>
        <div className="lg:w-[20%]">
          <ExpenseAmount />
        </div>
      </section>
      <label htmlFor="my-modal" className=" p-3 rounded-full bg-red-500 w-fit text-white font-semibold absolute top-[65%] lg:top-[80%] right-[22%] z-20 "><AiOutlinePlus /></label>



      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-[70%] max-w-4xl overflow-hidden">
          <AddForm />
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">CLOSE</label>
          </div>
        </div>
      </div>

    </main>

  );
}

export default App;
