import {
  getExpenses,
  newExpense,
  editExpense,
  deleteExpense,
  getExpensesError,
  newExpensesError,
  editExpensesError,
  deleteExpensesError,
} from '../app/expensesSlice';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7149/Expenses',
});

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosInstance.get();

    dispatch(getExpenses(data));
  } catch {
    dispatch(getExpensesError());
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.post('', expense);

    dispatch(newExpense(data));
  } catch {
    dispatch(newExpensesError());
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.put('', expense);

    dispatch(editExpense(data));
  } catch {
    dispatch(editExpensesError());
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    // api call
    await axiosInstance.delete('', { data: { ...expense } });

    dispatch(deleteExpense(expense));
  } catch {
    dispatch(deleteExpensesError());
  }
};
