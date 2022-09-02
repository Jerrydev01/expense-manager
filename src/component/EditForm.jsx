import React, { useState } from 'react'
import { editList } from '../features/globalSlice';
import { useDispatch } from "react-redux";
// import { v4 as uuid } from 'uuid';


const EditForm = ({ theEmployee }) => {

    const id = theEmployee.id;

    const [date, setDate] = useState(theEmployee.date);
    const [merchant, setMerchant] = useState(theEmployee.merchant);
    const [total, setTotal] = useState(theEmployee.total);
    const [text, setText] = useState(theEmployee.text);


    const dispatch = useDispatch();

    const upDatedEmployee = { date, merchant, total, text };

    const handleEditList = (e) => {
        e.preventDefault();
        dispatch(editList({id, upDatedEmployee}));
    };


    return (
        <section className="flex-col flex gap-5 lg:flex-row">
            <div className="">
                <form
                    onSubmit={handleEditList}
                    className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Merchant
                            </label>
                            <div className="relative">
                                <select
                                    name='merchant'
                                    value={merchant}
                                    onChange={(e) => setMerchant(e.target.value)}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Total">
                                Total <span className="text-red-600">*</span>
                            </label>
                            <input
                                name='total'
                                value={total}
                                onChange={(e) => setTotal(e.target.value)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-Total" type="tel" placeholder="₦" />

                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Date
                            </label>
                            <input
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-comment">
                                Comment
                            </label>
                            <textarea
                                name='text'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-comment" placeholder="Say something" />
                            <p className="text-gray-600 text-xs italic">Please fill all required</p>
                        </div>
                    </div>
                    <button className=""
                        type='submit'>Edit</button>
                </form>
            </div >
            <div className="w-[60%]">
                hello
            </div>
        </section >
    )
}

export default EditForm