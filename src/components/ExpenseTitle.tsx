import React from 'react';

interface balanceProps {
    balance: number
}

const ExpenseTitle = ({balance}: balanceProps) => {
    return (
        <div className={'w-full h-[150px] flex flex-col justify-center items-center'}>
            <h1 className={'font-mono text-4xl m-2'}>Expense Tracker</h1>
            <h3 className={'font-mono text-2xl m-1'}>Balance</h3>
            <h2 className={'font-mono text-4xl m-1 mb-2'}>{`$${balance}`}</h2>
            <hr className={'text-black w-full h-[2px]'}/>
        </div>
    );
};

export default ExpenseTitle;