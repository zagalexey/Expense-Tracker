import React, {useRef} from 'react';
import icon from "./Icon";


interface ExpenseAddTabProps {
    onSubmit: (e: any, tmpAddedExpense: object) => void
}

const ExpenseAddTab = ({onSubmit}: ExpenseAddTabProps) => {

    const typeInput = useRef<HTMLSelectElement>(null)
    const categoryInput = useRef<HTMLSelectElement>(null)
    const amountInput = useRef<HTMLInputElement>(null)
    const dateInput = useRef<HTMLInputElement>(null)

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.slice(1)
    }

    function submit(e: any) {
        const tmpAddedExpense = {
            id: Date.now(),
            category: categoryInput.current !== null ? capitalize(categoryInput.current.value) : null,
            amount: amountInput.current !== null ? parseInt(amountInput.current.value) : null,
            date: dateInput.current !== null ? dateInput.current.value : null,
            type: typeInput.current !== null ? typeInput.current.value : null
        }
        onSubmit(e, tmpAddedExpense)
    }

    return (
        <div className={'w-4/5 h-auto m-2'}>
            <form className={'flex flex-col justify-center items-center mt-2 mb-2 gap-2'}
                  action="#">
                <select ref={typeInput}
                        className={'form-select'}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <select ref={categoryInput}
                        className="form-select"
                        required={true}>
                    <option value="salary"> Salary</option>
                    <option value="car">Car</option>
                    <option value="shopping">Shopping</option>
                    <option value="health">Health</option>
                    <option value="house">House</option>
                </select>
                <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input ref={amountInput}
                           type="number"
                           className="form-control"
                           aria-label="Amount (to the nearest dollar)"
                           defaultValue={0}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Date</span>
                    <input ref={dateInput}
                           type="date"
                           className="form-control"
                           aria-label="Amount (to the nearest dollar)"/>
                </div>
                <input className={"btn btn-primary bg-blue-500"}
                       type="submit"
                       value="Add Expense"
                       onClick={(e) => submit(e)}/>
            </form>
        </div>
    );
};

export default ExpenseAddTab;