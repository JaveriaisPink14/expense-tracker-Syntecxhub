import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense, titleRef }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && date) {
      addExpense({
        title,
        amount: parseFloat(amount),
        category,
        date,
      });
      setTitle('');
      setAmount('');
      setCategory('Other');
      setDate('');
    }
  };

  const handleClear = () => {
    setTitle('');
    setAmount('');
    setCategory('Other');
    setDate('');
  };

  return (
    <div className="expense-form-container">
      <h3>Add New Expense</h3>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-primary">Add Expense</button>
          <button type="button" onClick={handleClear} className="btn-secondary">Clear Form</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
