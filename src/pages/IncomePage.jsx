import React, { useState, useEffect } from 'react';

const IncomePage = ({ onIncomeChange }) => {
  const [salary, setSalary] = useState('');
  const [otherIncome, setOtherIncome] = useState('');

  // Calculate the total income by parsing the input values as numbers
  const totalIncome = (parseFloat(salary)|| 0) + (parseFloat(otherIncome)|| 0);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedSalary = localStorage.getItem('salary');
    const storedOtherIncome = localStorage.getItem('otherIncome');
    if (storedSalary) setSalary(storedSalary);
    if (storedOtherIncome) setOtherIncome(storedOtherIncome);
  }, []);

  // Update local storage and the parent state whenever salary or otherIncome change
  useEffect(() => {
    localStorage.setItem('salary', salary);
    localStorage.setItem('otherIncome', otherIncome);
    onIncomeChange(totalIncome); // Notify the parent component about the updated total income
  }, [salary, otherIncome, totalIncome]);

  return (
    <div className='bg-slate-600 w-screen h-screen flex items-center justify-center'>
      <div className='bg-yellow-300 w-1/2 h-1/2 flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-semibold mb-4">Income-Summary</h1>
        <form className="text-lg">
          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40">Salary:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-40 ml-2 border border-gray-500 p-1"
            />
          </div>
          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40">Other Income:</label>
            <input
              type="number"
              value={otherIncome}
              onChange={(e) => setOtherIncome(e.target.value)}
              className="w-40 ml-2 border border-gray-500 p-1"
            />
          </div>
          <div className="bg-green-300 flex mb-4 border-solid border-2 border-indigo-600 p-4">
            <label className="w-40 ">Total Income:</label>
            <span>${totalIncome}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomePage;
