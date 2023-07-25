import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import HomePage from './pages/HomePage';

const App = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Callback function to update totalIncome state
  const handleIncomeChange = (income) => {
    setTotalIncome(income);
  };

  // Callback function to update totalExpenses state
  const handleExpensesChange = (expenses) => {
    setTotalExpenses(expenses);
  };

  return (
    <Router>
      <div className="navbar bg-blue-300 h-4">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-white" to="/">
            MyBudget
          </Link>
        </div>
        <div className="flex-none justify-between">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="p-2 text-xl text-white" to="/income">
                Income
              </Link>
            </li>
            <li>
              <Link className="p-2 text-xl text-white" to="/expenses">
                Expenses
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        {/* Use render method to pass props to the components */}
       <Route
          path="/"
          element={<HomePage totalIncome={totalIncome} totalExpenses={totalExpenses} totalSavings={totalIncome - totalExpenses} />}
        />
        <Route path="/income" element={<IncomePage onIncomeChange={handleIncomeChange} />} />
        <Route path="/expenses" element={<ExpensePage onExpensesChange={handleExpensesChange} />} />
      </Routes>
    </Router>
  );
};

export default App;
