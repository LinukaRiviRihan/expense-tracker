import { createSlice } from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
  },
  reducers: {
    getExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    addExpense: (state, action) => {
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

export const { getExpenses, addExpense, editExpense, deleteExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
