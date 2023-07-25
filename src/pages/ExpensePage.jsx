import React, { useState, useEffect } from 'react';

const ExpensePage = ({ onExpensesChange }) => {
  const [houseRent, setHouseRent] = useState('');
  const [grocery, setGrocery] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');

  // Calculate the total expenses by summing up all the individual expense state values
  const totalExpenses =
    (parseFloat(houseRent) || 0) + (parseFloat(grocery) || 0) + (parseFloat(otherExpenses) || 0);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedHouseRent = localStorage.getItem('houseRent');
    const storedGrocery = localStorage.getItem('grocery');
    const storedOtherExpenses = localStorage.getItem('otherExpenses');
    if (storedHouseRent) setHouseRent(storedHouseRent);
    if (storedGrocery) setGrocery(storedGrocery);
    if (storedOtherExpenses) setOtherExpenses(storedOtherExpenses);
  }, []);

  // Update local storage and the parent state whenever houseRent, grocery, or otherExpenses change
  useEffect(() => {
    localStorage.setItem('houseRent', houseRent);
    localStorage.setItem('grocery', grocery);
    localStorage.setItem('otherExpenses', otherExpenses);
    onExpensesChange(totalExpenses); // Notify the parent component about the updated total expenses
  }, [houseRent, grocery, otherExpenses, totalExpenses]);

  return (
    <div className='bg-slate-600 w-screen h-screen flex items-center justify-center'>
      <div className='bg-yellow-300 w-1/2 h-2/3 flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-semibold mb-4">Expenses Summary</h1>

        <form className="text-lg">
          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40">House Rent:</label>
            <input
              type="number"
              value={houseRent}
              onChange={(e) => setHouseRent(e.target.value)}
              className="w-40 ml-2 border border-gray-500 p-1"
            />
          </div>

          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40">Grocery:</label>
            <input
              type="number"
              value={grocery}
              onChange={(e) => setGrocery(e.target.value)}
              className="w-40 ml-2 border border-gray-500 p-1"
            />
          </div>

          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40">Other Expenses:</label>
            <input
              type="number"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
              className="w-40 ml-2 border border-gray-500 p-1"
            />
          </div>
        </form>

        <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
          <label className="w-40">Total Expenses:</label>
          <span className="bg-white w-40 ml-2 border border-gray-500 p-1">${totalExpenses || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;



