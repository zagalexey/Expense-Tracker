import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import {hydrateRoot} from "react-dom/client";

interface Props {
    expenseListData: {
        id: number,
        type: string
        category: string,
        amount: number,
        date: string
    }[],
    onDelete: (index: number) => void
}

const ExpenseList = ({expenseListData, onDelete}: Props) => {

    return (
        <ul className={'w-4/5 h-full flex flex-col justify-center mt-5 mb-5 gap-3'}>
            {expenseListData.map((item, index) => {
                if (item.type === 'expense') {
                    return (
                        <ExpenseItem key={index} id={item.id} iconType={'remove'} amount={item.amount} category={item.category} date={item.date} onDelete={onDelete} />
                    )
                }else {
                    return (
                        <ExpenseItem key={index} id={item.id} iconType={'add'} amount={item.amount} category={item.category} date={item.date} onDelete={onDelete}/>
                    )
                }
            })}
        </ul>
    );
};

export default ExpenseList;