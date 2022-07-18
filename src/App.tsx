import React, {useEffect, useState} from 'react';
import './App.css';
import IncomeTab from "./components/IncomeTab";
import ExpenseTrackerTab from "./components/ExpenseTrackerTab";
import ExpenseTab from "./components/ExpenseTab";

type expenseData =
    {
        id: number,
        type: string,
        category: string,
        amount: number,
        date: string
    }[]

function App() {

    let data: expenseData = [
        {
            id: 1,
            type: 'income',
            category: 'Salary',
            amount: 1000,
            date: '2022-05-19'
        },
        {
            id: 2,
            type: 'expense',
            category: 'Car',
            amount: 500,
            date: '2022-07-25'
        },
        {
            id: 3,
            type: 'expense',
            category: 'Shopping',
            amount: 20,
            date: '2022-08-26'
        }
    ]

    const [expenseData, setExpenseData] = useState(data)
    const [balance, setBalance] = useState(0)
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    useEffect(() => {
        changeBalance(expenseData)
        changeIncomeChard(expenseData)
        changeExpenseChard(expenseData)
    }, [expenseData])

    function changeIncomeChard(expenses: expenseData): void {
        let tmpIncome: number = 0
        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].type === 'income') {
                tmpIncome += expenses[i].amount
            }
        }
        setIncome(tmpIncome)
    }

    function changeExpenseChard(expenses: expenseData): void {
        let tmpExpense: number = 0
        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].type === 'expense') {
                tmpExpense += expenses[i].amount
            }
        }
        setExpense(tmpExpense)
    }

    function changeBalance(expenses: expenseData) {
        let tmpPositiveBalance: number = 0
        let tmpNegativeBalance: number = 0
        let tmpBalance: number = 0

        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].type === 'income') {
                tmpPositiveBalance += expenses[i].amount
            } else {
                tmpNegativeBalance += expenses[i].amount
            }
        }
        tmpBalance = tmpPositiveBalance - tmpNegativeBalance
        setBalance(tmpBalance)
    }

    function deleteItem(id: number): void {
        const changedData = expenseData.filter(item => item.id !== id)
        setExpenseData(changedData)
    }

    function onSubmit(e: any, tmpAddedExpense: any): void {
        e.preventDefault()
        console.log(tmpAddedExpense)
        if (tmpAddedExpense.amount === 0 || !isNaN(tmpAddedExpense)) {
            window.alert('You should enter some expense amount')
        } else {
            setExpenseData([...expenseData, tmpAddedExpense])
        }
    }

    return (
        <div className={'flex flex-row justify-center w-full h-full app'}>
            <div className={'flex flex-row gap-2 w-3/4'}>
                <IncomeTab incomeValue={income}/>
                <ExpenseTrackerTab expenseListData={expenseData}
                                   balance={balance}
                                   onSubmit={onSubmit}
                                   onDelete={deleteItem}/>
                <ExpenseTab expenses={expenseData}
                            expenseValue={expense}/>
            </div>
        </div>
    )
}

export default App;
