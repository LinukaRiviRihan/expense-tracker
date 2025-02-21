import { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NewExpense, EditExpense, DeleteExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

function ExpenseForm({ expense, setIsEditing }) {
  const descriptions = [
    'Food',
    'Rent',
    'Health',
    'Utilities',
    'Groceries',
    'Transportation',
    'Entertainment',
    'Other',
  ];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (isNewExpense) {
            NewExpense(dispatch, { description, amount });
          } else {
            EditExpense(dispatch, { id: expense.id, description, amount });
            setIsEditing(false);
          }
        }}
      >
        <Row>
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '320px' }}
            >
              {descriptions.map((desc) => (
                <option key={desc} value={desc}>
                  {desc}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ width: '320px' }}
            />
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <div style={{ marginTop: '26px' }}>
              {isNewExpense ? (
                <Button variant="primary" type="submit">
                  Add
                </Button>
              ) : (
                <div>
                  <Button
                    style={{ marginRight: '8px' }}
                    variant="success"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    style={{ marginRight: '8px' }}
                    variant="danger"
                    onClick={() => DeleteExpense(dispatch, expense)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ExpenseForm;
