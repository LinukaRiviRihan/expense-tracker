const initialState = {
  expenses: [],
};

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES',
  NEW_EXPENSE: 'NEW_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const ActionCreators = {
  setExpenses: (expenses) => ({
    type: ActionTypes.SET_EXPENSES,
    payload: expenses,
  }),
  addExpense: (expense) => ({
    type: ActionTypes.NEW_EXPENSE,
    payload: expense,
  }),
  editExpense: (expense) => ({
    type: ActionTypes.EDIT_EXPENSE,
    payload: expense,
  }),
  deleteExpense: (expense) => ({
    type: ActionTypes.DELETE_EXPENSE,
    payload: expense,
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: action.payload };
    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case ActionTypes.EDIT_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };
    case ActionTypes.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
