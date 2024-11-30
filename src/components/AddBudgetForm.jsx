import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";


export default function AddBudgetForm() {
    const fetcher = useFetcher();
    const isSubmiting = fetcher.state === 'submitting'; // flase
    const formRef = useRef();
    const focusRef = useRef()

    useEffect(() => {
        if(!isSubmiting) {
            formRef.current.reset();
            focusRef.current.focus()
        }
    }, [isSubmiting])

    return(<>
        <div className="create-budget">
            <h3>Creacte Budget</h3>
            <fetcher.Form method="post" ref={formRef} >

                <label htmlFor="newBudget">Budget Name</label>
                <input type="text" 
                    name="newBudget"
                    id="newBudget"
                    placeholder="e.g., Groceris"
                    ref={focusRef}
                    required
                />
                <input type="hidden" name="_action" value='newBudget' />
                <label htmlFor="newBudgetAmount">Amount</label>
                <input type="number" 
                    step='0.01'
                    name="newBudgetAmount"
                    id="newBudgetAmount"
                    placeholder="e.g., $350"
                    inputMode="decimal"
                    required
                />
                <button type="submit" className="create-budget-btn" disabled={isSubmiting}>
                    {
                        isSubmiting ? <span> Creating ...</span>
                        : <span>Create budget</span>
                    }
                </button>
            </fetcher.Form>
        </div>
    </>)
}