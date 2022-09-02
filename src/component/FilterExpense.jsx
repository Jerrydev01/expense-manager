import React from 'react'

const FilterExpense = () => {


    return (
        <section className="px-8 mt-8">
            <div className="">
                <div className="flex justify-between items-center mb-2">
                    <p className="">Filter Expenses</p>
                    <p className="text-blue-500"><button>Clear Filters</button></p>
                </div>
                <hr />
                <form className="w-full max-w-lg text-sm">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Total">
                                From
                            </label>
                            <input

                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-Total" type="date" placeholder="" />

                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Total">
                                To
                            </label>
                            <input

                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-Total" type="date" placeholder="" />

                        </div>
                        <div className="flex w-fit items-center">
                            <div className="px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Min
                                </label>
                                <input

                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="N" />
                            </div>
                            <div>-</div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Max
                                </label>
                                <input

                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Merchant
                            </label>
                            <div className="relative">
                                <select

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
                    </div>
                    <div className="flex flex-wrap">
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">new</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">In Progress</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">Reimbursed</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div >

        </section >
    )
}

export default FilterExpense