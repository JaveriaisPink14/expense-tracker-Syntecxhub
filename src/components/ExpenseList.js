import React, { useState } from 'react';
import Modal from './Modal';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [editingExpense, setEditingExpense] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState('Other');
  const [editDate, setEditDate] = useState('');

  const getCategoryIcon = (category) => {
    const icons = {
      Food: '🍔',
      Travel: '✈️',
      Bills: '💡',
      Shopping: '🛒',
      Other: '📦'
    };
    return icons[category] || '📦';
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setEditTitle(expense.title);
    setEditAmount(expense.amount.toString());
    setEditCategory(expense.category || 'Other');
    setEditDate(expense.date);
  };

  const handleSaveEdit = () => {
    if (editTitle && editAmount && editDate) {
      editExpense(editingExpense.id, {
        title: editTitle,
        amount: parseFloat(editAmount),
        category: editCategory,
        date: editDate,
      });
      setEditingExpense(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  return (
    <div className="expense-list">
      <h3>Recent Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <div className="expense-items">
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-details">
                <span className="expense-icon">{getCategoryIcon(expense.category)}</span>
                <span className="expense-title">{expense.title}</span>
                <span className="expense-amount">-${expense.amount.toFixed(2)}</span>
                <span className="expense-date">{expense.date}</span>
              </div>
              <div className="expense-actions">
                <button onClick={() => handleEdit(expense)} className="edit-btn">Edit</button>
                <button onClick={() => deleteExpense(expense.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {editingExpense && (
        <Modal onClose={handleCancelEdit}>
          <h3>Edit Expense</h3>
          <div className="form-group">
            <label htmlFor="edit-title">Title</label>
            <input
              type="text"
              id="edit-title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-amount">Amount</label>
            <input
              type="number"
              id="edit-amount"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-category">Category</label>
            <select
              id="edit-category"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              required
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Bills">Bills</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="edit-date">Date</label>
            <input
              type="date"
              id="edit-date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
            <button onClick={handleSaveEdit} className="save-btn">Save</button>
            <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ExpenseList;
