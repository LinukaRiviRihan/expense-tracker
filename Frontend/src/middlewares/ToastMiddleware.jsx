import {
  newExpense,
  editExpense,
  deleteExpense,
  getExpensesError,
  newExpensesError,
  editExpensesError,
  deleteExpensesError,
} from '../app/expensesSlice';
import { toast } from 'react-toastify';

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case newExpense.type:
      toast.success('Expense added successfully');
      break;
    case editExpense.type:
      toast.success('Expense updated successfully');
      break;
    case deleteExpense.type:
      toast.success('Expense deleted successfully');
      break;
    case getExpensesError.type:
      toast.error('Error fetching expenses');
      break;
    case newExpensesError.type:
      toast.error('Error adding expenses');
      break;
    case editExpensesError.type:
      toast.error('Error editing expenses');
      break;
    case deleteExpensesError.type:
      toast.error('Error deleting expenses');
      break;
    default:
      break;
  }

  return next(action);
};

export default ToastMiddleware;
