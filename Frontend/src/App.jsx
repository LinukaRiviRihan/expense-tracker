import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div style={{ width: '60%', margin: 'auto', padding: '1rem' }}>
      <ToastContainer />
      <h3>New Expense</h3>
      <ExpenseForm />
      <hr style={{ border: '1px solid gray' }} />
      <h3>Your Expenses</h3>
      <Expenses />
    </div>
  );
};

export default App;
