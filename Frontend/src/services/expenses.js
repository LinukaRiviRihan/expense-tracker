import { ActionCreators } from '../app/expensesReducer';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7149/Expenses',
});

export const getExpenses = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.setExpenses(data));
  } catch {
    console.log('Error!');
  }
};

export const newExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.post('', expense);

    dispatch(ActionCreators.addExpense(data));
  } catch {
    console.log('Error!');
  }
};

export const editExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axiosInstance.put('', expense);

    dispatch(ActionCreators.editExpense(data));
  } catch {
    console.log('Error!');
  }
};

export const deleteExpense = async (dispatch, expense) => {
  try {
    // api call
    await axiosInstance.delete('', { data: { ...expense } });

    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log('Error!');
  }
};
