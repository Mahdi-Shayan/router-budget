import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom"


export default function AddExpenseForm({budgets}) {
    const fetcher = useFetcher();
    const formRef = useRef()
    const focusRef = useRef()

    const isSubmiting = fetcher.state === 'submitting'; // flase

    useEffect(() => {
        if(!isSubmiting) {
            formRef.current.reset();
            focusRef.current.focus()
        }
    }, [isSubmiting])


    return(
        <div className="create-expense">
            <h3>Add Now {' '}
                <span>
                {
                    budgets.length === 1 && budgets.map(budget => budget.name)
                }
                </span> {' '}
                Expense
            </h3>
            <fetcher.Form
                method="post"
                ref={formRef}
            >
                <label htmlFor="newExpense">Expense Name</label>
                <input 
                    type="text" 
                    name='newExpense'
                    id="newExpense"
                    placeholder="e.g., coffee"
                    ref={focusRef}
                    required
                    />
                <label htmlFor="newExpenseAmount">Amount</label>
                <input 
                    type="number" 
                    name="newExpenseAmount" 
                    id="newExpenseAmount"
                    placeholder="e.g., 3.50"
                    inputMode="decimal" 
                    step='0.01'
                    required
                    />
                    <label htmlFor="newExpenseBudget" hidden={budgets.length === 1}>Budget Category</label>
                    <select 
                        id="newExpenseBudget" 
                        name='newExpenseBudget' 
                        hidden={budgets.length === 1}
                        required >
                        {
                            budgets.sort((a, b) => a.createAt - b.createAt)
                            .map(budget => {
                                return(
                                    <option key={budget.id} value={budget.id}>
                                        {budget.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                <input type="hidden" name="_action" value={'createExpense'} />
                <button 
                    type="submit" 
                    className="create-expense-btn" 
                    disabled={isSubmiting}
                    >
                    {
                        isSubmiting ? <span> Submitting ...</span>
                        : <span>Create expense</span>
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}