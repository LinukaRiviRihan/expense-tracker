import {
  getExpenses,
  addExpense,
  editExpense,
  deleteExpense,
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
    console.log('Error!');
  }
};

export const AddExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.post('', expense);

    dispatch(addExpense(data));
  } catch {
    console.log('Error!');
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.put('', expense);

    dispatch(editExpense(data));
  } catch {
    console.log('Error!');
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    // api call
    await axiosInstance.delete('', { data: { ...expense } });

    dispatch(deleteExpense(expense));
  } catch {
    console.log('Error!');
  }
};
