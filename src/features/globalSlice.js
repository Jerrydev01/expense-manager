import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// local storage
const employee = localStorage.getItem('employee') !== null ? JSON.parse(localStorage.getItem('employee')) : [
    {
        id: uuid(), date: '23/08/2022', merchant: 'Electronics',
        total: 2500, status: 'new', text: 'Expense from my business trip.',
    },
    {
        id: uuid(), date: '02/09/2022', merchant: 'Hotel',
        total: 3500, status: 'reimbursed', text: 'Expense from my business.',
    },
    {
        id: uuid(), date: '18/08/2022', merchant: 'Rental Car',
        total: 9000, status: 'in progress', text: 'Expense from my business trip.',
    },
];

const initialState = {
    employees: employee,
    employeeTotalAmount: 0,
};

// console.log(initialState);

export const globalSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.employees.unshift(action.payload);
            localStorage.setItem('employee', JSON.stringify(state.employees));
        },

        deleteFromList(state, action) {
            state.employees.map((employee) => {
                if (employee.id === action.payload.id) {
                    const nextEmployee = state.employees.filter((list) => list.id !== employee.id);
                    state.employees = nextEmployee;
                    state.employees = nextEmployee.total;
                }
                return state;
            });
        },

        totalAmount(state) {
            const amount = state.employees.map(employee => employee.total);
            const income = amount.filter(item => item >= 0).reduce((acc, item) => (acc += item), 0);
            state.employeeTotalAmount = income;
        },


        filterChecked: (state, action) => {
            const me = state.employees.map((employee) => {
                if (employee.status === 'me') {
                    const nextEmployee = state.employees.filter((list) => list.status === employee.status);
                    state.employees = nextEmployee;
                    state.employees = nextEmployee.total;
                }
                return state;
            });
            console.log("🚀 ~ file: globalSlice.js ~ line 72 ~ me ~ me", me)
        },

        clearTable: (state, action) => {
            return {
                ...state,
                employees: [...state.employees].filter((employee) => employee.status.includes(action.payload))
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToList, editList, deleteFromList, totalAmount, filterChecked, clearTable } = globalSlice.actions;

export default globalSlice.reducer;