import React from 'react';
import Icon from "./Icon";
import DeleteButton from "./DeleteButton";

interface ItemProps {
    id: number
    amount: number
    category: string
    date: string
    iconType: string
    onDelete: (index: number) => void
}


const ExpenseItem = ({amount, category, date, iconType, onDelete, id}: ItemProps) => {
    return (
        <li className={'flex flex-row justify-between items-center h-[40px] border-2 rounded'}>
            <Icon iconType={iconType} />
            <section className={'flex justify-center w-[4rem]'}>
                <p>{`$${amount}`}</p>
            </section>
            <section className={'flex justify-center w-1/3'}>
                <p>{category}</p>
            </section>
            <section className={'flex justify-center w-1/5'}>
                <p>{date}</p>
            </section>
            <DeleteButton onClick={onDelete} id={id}/>
        </li>
    );
};

export default ExpenseItem;