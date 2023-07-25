import React from 'react';

const HomePage = ({ totalIncome, totalExpenses, totalSavings }) => {
  return (
    <div className='bg-slate-600 w-screen h-screen flex items-center justify-center'>
      <div className='bg-yellow-300 w-1/2 h-1/2 flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-semibold mb-4">Home Page</h1>
        <p className="bg-green-300 text-lg px-4 py-2 rounded-lg mb-4">
          Total Income: ${totalIncome}
        </p>
        <p className="bg-green-300 text-lg px-4 py-2 rounded-lg mb-4">
          Total Expenses: ${totalExpenses}
        </p>
        <p className="bg-green-300 text-lg px-4 py-2 rounded-lg">
          Total Savings: ${totalSavings}
        </p>
      </div>
    </div>
  );
};

export default HomePage;




