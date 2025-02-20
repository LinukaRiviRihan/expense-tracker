import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Button, Row, Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesSlice.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  const ListRow = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing ? (
      <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
    ) : (
      <div>
        <Row>
          <Col>{expense.description}</Col>
          <Col>${expense.amount}</Col>
          <Col style={{ textAlign: 'right' }}>
            <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
              Edit
            </Button>
          </Col>
        </Row>
        <hr />
      </div>
    );
  };

  return (
    <>
      {expenses.map((expense) => (
        <div key={expense.id} style={{ marginBottom: '1rem ' }}>
          <ListRow expense={expense} />
        </div>
      ))}
    </>
  );
}

export default Expenses;
