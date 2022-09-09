import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAddTab from "./ExpenseAddTab";

type expenseData = {
  id: number;
  type: string;
  category: string;
  amount: number;
  date: string;
}[];

interface expenseTrackerTabProps {
  balance: number;
  expenseListData: expenseData;
  onDelete: (index: number) => void;
  onSubmit: (e: any, tmpAddedExpense: object) => void;
}

const ExpenseTrackerTab = ({
  balance,
  expenseListData,
  onDelete,
  onSubmit,
}: expenseTrackerTabProps) => {
  return (
    <div
      className={
        "expense-tracker-tab w-3/5 h-auto bg-[#F5F5F5] roundAed-lg flex flex-col items-center border-4"
      }
    >
      <ExpenseTitle balance={balance} />
      <ExpenseList expenseListData={expenseListData} onDelete={onDelete} />
      <hr className={"bg-black w-full h-[2px]"} />
      <ExpenseAddTab onSubmit={onSubmit} />
    </div>
  );
};

export default ExpenseTrackerTab;
