import React from 'react';
import './Summary.css';

const Summary = ({ summaryData, budget, setBudget }) => {
  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value) || 0);
  };

  const budgetUsedPercentage = budget > 0 ? ((summaryData.monthly / budget) * 100).toFixed(1) : 0;
  const isOverBudget = summaryData.monthly > budget;

  return (
    <div className="summary">
      <h3>Financial Overview</h3>

      <div className="budget-overview">
        <div className="budget-header">
          <div className="budget-icon">💰</div>
          <div className="budget-info">
            <h4>Monthly Budget</h4>
            <div className="budget-input-wrapper">
              <span className="currency">$</span>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={handleBudgetChange}
                step="0.01"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        <div className="budget-progress">
          <div className="progress-bar">
            <div
              className={`progress-fill ${isOverBudget ? 'over-budget' : ''}`}
              style={{ width: `${Math.min(budgetUsedPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="progress-text">
            <span>{budgetUsedPercentage}% used</span>
            <span className={isOverBudget ? 'over-budget-text' : ''}>
              ${summaryData.monthly.toFixed(2)} / ${budget.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="summary-metrics">
        <div className="metric-card">
          <div className="metric-icon">📊</div>
          <div className="metric-content">
            <h5>Total Expenses</h5>
            <p className="metric-value">${summaryData.total.toFixed(2)}</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">📅</div>
          <div className="metric-content">
            <h5>This Month</h5>
            <p className="metric-value">${summaryData.monthly.toFixed(2)}</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">🔥</div>
          <div className="metric-content">
            <h5>Highest Expense</h5>
            <p className="metric-value">${summaryData.highest.toFixed(2)}</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">🎯</div>
          <div className="metric-content">
            <h5>Remaining Budget</h5>
            <p className={`metric-value ${summaryData.remaining < 0 ? 'negative' : 'positive'}`}>
              ${summaryData.remaining.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {isOverBudget && (
        <div className="budget-alert">
          <div className="alert-icon">⚠️</div>
          <div className="alert-content">
            <h6>Budget Alert</h6>
            <p>You've exceeded your monthly budget by ${(summaryData.monthly - budget).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
