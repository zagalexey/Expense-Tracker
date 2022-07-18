import React from 'react';
import {Pie, PieChart, Tooltip, Legend, Cell} from "recharts";

type expenseData =
    {
        id: number,
        type: string,
        category: string,
        amount: number,
        date: string
    }[]

interface expenseTabProps {
    expenses: expenseData
    expenseValue: number
}

const ExpenseTab = ({expenses, expenseValue}: expenseTabProps) => {

    function checkForExpense(expenses: expenseData, type: string) {
        let tmpExpense: number = 0
        for (let i = 0; i < expenses.length; i++) {
            if(expenses[i].category === type && expenses[i].amount !== null) {
                tmpExpense += expenses[i].amount
            }
        }
        return tmpExpense
    }

    const data = [
        {name: 'Car', value: checkForExpense(expenses, 'Car')},
        {name: 'Shopping', value: checkForExpense(expenses, 'Shopping')},
        {name: 'Health', value: checkForExpense(expenses, 'Health')},
        {name: 'House', value: checkForExpense(expenses, 'House')}
    ];

    console.log(data)

    const COLORS = ['#0088FE', '#ff4498', 'rgba(126,213,111,0.8)', '#FF8042'];

    return (
        <div className={'expense-tab flex flex-col justify-center items-center w-1/5 h-[25rem] bg-[#F5F5F5] rounded-lg border-4'}>
            <h2 className={'font-mono m-2 text-2xl text-red-500'}>Expense</h2>
            <h1 className={'font-mono m-2 text-4xl text-red-500'}>{`$${expenseValue}`}</h1>
            <div className={'font-mono mt-2 h-full flex justify-center items-center'}>
                <PieChart width={200} height={200} >
                    <Legend />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default ExpenseTab;