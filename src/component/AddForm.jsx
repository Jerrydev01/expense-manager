import React, { useState } from "react";
// redux toolkit
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
// import dayjs from 'dayjs';

import { addToList } from "../features/globalSlice";

const merchants = [
    'Restaurant', 'Office supplies', 'Breakfast', 'Launch', 'Dinner', 'Hotel', 'Taxi', 'Electronics', 'Car rental', 'Fast food', 'Groceries', 'Parking', 'Ride Sharing', 'Parking fee', 'Shuttle', 'Airline'
];

const AddForm = () => {
    const [date, setDate] = React.useState("2022-09-02");
    const [merchant, setMerchant] = useState("Hotel");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("New");
    const [text, setText] = useState("New");

    const dispatch = useDispatch();

    const handleAddToList = (e) => {
        e.preventDefault();
        dispatch(
            addToList({
                id: uuid(),
                date,
                merchant,
                total,
                status,
                text,
            })
        );
    };

    const handleClearInput = (e) => {
        e.preventDefault();
        setMerchant((e.target.value = ""));
        setTotal((e.target.value = ""));
        setDate((e.target.value = ""));
        setText((e.target.value = ""));
    };

    return (
        <section className="flex-col flex gap-4 lg:flex-row">
            <div className="">
                <form onSubmit={handleAddToList} className="w-full max-w-lg text-xs ">
                    <div className="w-full max-w-lg overflow-y-auto overflow-x-hidden px-5 h-[25rem]">
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
                                        name="merchant"
                                        value={merchant}
                                        onChange={(e) => setMerchant(e.target.value)}
                                        required
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-state"
                                    >

                                        {merchants.map((merchant) => {
                                            return <option key={merchant}>{merchant}</option>
                                        }
                                        )}

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

                            <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-Total"
                                >
                                    Total <span className="text-red-600">*</span>
                                </label>
                                <input
                                    name="total"
                                    value={total}
                                    onChange={(e) => setTotal(Number(e.target.value))}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-Total"
                                    type="tel"
                                    placeholder="???"
                                />
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-date"
                                >
                                    Date
                                </label>

                                {/* <div className="text-xs">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            className="w-full appearance-none block bg-gray-200 text-gray-700 border  leading-tight focus:outline-none focus:bg-white"
                                            id="grid-date"
                                            openTo="month"
                                            views={['month', 'day', 'year']}
                                            value={date}
                                            onChange={(newValue) => {
                                                setDate(dayjs(newValue).format("DD/MM/YYYY"));
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div> */}

                                <input
                                    name="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none 
                                     focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    placeholder="YYYY-MM-DD"
                                    type="date"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-state"
                            >
                                Status
                            </label>
                            <div className="relative mb-6 w-full">
                                <select
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option>New</option>
                                    <option>Reimbursed</option>
                                    <option>In progress</option>
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
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-comment"
                                >
                                    Comment
                                </label>
                                <textarea
                                    name="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    required
                                    className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-comment"
                                    placeholder="Say something "
                                />
                                <p className="text-red-600 text-xs italic">
                                    Please fill all required
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 flex gap-3 mt-3">
                        <button className="bg-blue-500 text-white px-3 py-2 shadow-md rounded-md">
                            Save
                        </button>
                        <button
                            className="bg-red-500 text-white px-3 py-2 shadow-md rounded-md"
                            onClick={handleClearInput}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddForm;
