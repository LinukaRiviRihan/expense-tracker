import { ActionCreators } from '../app/expensesReducer';

export const getExpenses = async (dispatch) => {
  try {
    // api call
    const expenses = [
      { id: 1, description: 'Rent', amount: 100 },
      { id: 2, description: 'Utilities', amount: 200 },
      { id: 3, description: 'Groceries', amount: 300 },
      { id: 4, description: 'Entertainment', amount: 400 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log('Error!');
  }
};

export const newExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(
      ActionCreators.addExpense({
        id: Math.floor(Math.random() * 1000),
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log('Error!');
  }
};
export const editExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(
      ActionCreators.editExpense({
        id: expense.id,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log('Error!');
  }
};
export const deleteExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log('Error!');
  }
};
