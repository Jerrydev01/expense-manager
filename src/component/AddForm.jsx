import React, { useState } from 'react'
// redux toolkit
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';



import {
    addToList,
} from "../features/globalSlice";


const amount = parseInt('9000.00');
const AddForm = () => {

    const [employee, setEmployee] = useState({
        id: '',
        date: '',
        merchant: 'Hotel',
        total: amount,
        status: 'New',
        text: ''
    });

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };
    // const [merchant, setMerchant] = useState('New Mexico');
    // const [total, setTotal] = useState(0);
    // const [text, setText] = useState('');



    const dispatch = useDispatch();

    const { date, merchant, total, status, text } = employee;

    const handleAddToList = (e) => {
        e.preventDefault();
        dispatch(addToList({
            id: uuid(), date, merchant, total, status, text
        }));
    };


    return (
        <section className="flex-col flex gap-4 lg:flex-row">
            <div className="">
                <form
                    onSubmit={handleAddToList}
                    className="w-full max-w-lg text-xs ">
                    <div className="flex flex-wrap -mx-3 mb-6">


                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Merchant
                            </label>
                            <div className="relative">
                                <select
                                    name='merchant'
                                    value={merchant}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Electronics</option>
                                    <option>Hotel</option>
                                    <option>Rental Car</option>
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
                                onChange={(e) => onInputChange(e)}
                                required
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-Total" type="text" placeholder="₦" />

                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Date
                            </label>
                            <input
                                name='date'
                                value={date}
                                onChange={(e) => onInputChange(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none 
                                focus:bg-white focus:border-gray-500" id="grid-last-name"
                                placeholder="dd/mm/yyyy"
                                type="date" required />
                        </div>
                    </div>
                    <div className="w-full md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Status
                        </label>
                        <div className="relative mb-6 w-full">
                            <select
                                name='status'
                                value={status}
                                onChange={(e) => onInputChange(e)}
                                required
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New</option>
                                <option>Reimbursed</option>
                                <option>In progress</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
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
                                onChange={(e) => onInputChange(e)}
                                required
                                className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-comment" placeholder="Say something " />
                            <p className="text-gray-600 text-xs italic">Please fill all required</p>
                        </div>
                    </div>
                    <button>Save</button>
                </form>
            </div >
            <div className="w-[60%]">
                hello
            </div>
        </section >
    )
}

export default AddForm