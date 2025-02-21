import { createSlice, createAction } from '@reduxjs/toolkit';

export const getExpensesError = createAction('setExpensesError');
export const newExpensesError = createAction('newExpensesError');
export const editExpensesError = createAction('editExpensesError');
export const deleteExpensesError = createAction('deleteExpensesError');

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
  },
  reducers: {
    getExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    newExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const { getExpenses, newExpense, editExpense, deleteExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
