import {  Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

// Helpers
import { createBudget, createExpenses, deleteexpenseItem, storageData } from "../helpers";

// Components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import ExpensesTable from "../components/ExpensesTable";

export default function Dasboard() {
    const { userName, budget, expenses } = useLoaderData();

    return(<>
        {userName
            ? (
                <div className="dashboard-grid">
                    <h1 className="greeting">
                        Welcome back, <span className="accent">
                            {userName} 
                        </span>
                    </h1> 
                    <div className="create-bugets-grid">
                        {
                            budget && budget.length > 0 
                            ? (<>
                                <AddBudgetForm />
                                <AddExpenseForm budgets={JSON.parse(budget)}/>
                            </>)
                            : (<>
                                <div>
                                    <p style={{ fontSize: '18px'}}>Personal budgeting is the secret to financial freedom.</p>
                                    <p style={{marginBottom: '20px',  fontSize: '18px'}}>Create budget to get start!</p>
                                    <AddBudgetForm />
                                </div>
                            </>)
                        }
                    </div>
                    {
                        budget && budget.length > 0 
                        && <h2 className="budget-title">Existing Budgets</h2>
                    }
                    <div className="budgets-container">
                        {
                            budget && JSON.parse(budget).map(b => (
                                <BudgetItem key={b.id} budget={b}/>
                            ))
                        }
                    </div>
                    {
                        expenses && JSON.parse(expenses).length > 0 && (
                            <div className="expenses-container">
                                <h2 className="expenses-title">
                                    Recent Expenses
                                </h2>
                                <ExpensesTable expenses={JSON.parse(expenses).sort
                                    ((a, b) => b.createAt - a.createAt).slice(0, 8)
                                }/>
                                { expenses.length > 8 && (
                                    <Link
                                        to={'expenses'}
                                        className='expenses-link'
                                    >
                                        View all expenses
                                    </Link>
                                )}
                            </div>
                        )
                    }
                </div>
            )
            : <Intro />
        }
    </>)
}

export function dashboardLoader() {
    const userName = storageData('userName');
    const budget = storageData('budget');
    const expenses = storageData('expenses');
    return { userName, budget, expenses };
}

export async function dashboardAction({request}) {
    await new Promise((res) => {
        setTimeout(res, Math.random() * 1000)
    })

    const formData = await request.formData();
    const {_action, ...values} = Object.fromEntries(formData);

    if(_action === 'newUser') {
        try{
            JSON.stringify(localStorage.setItem('userName', values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch(e) {
            throw new Error("There was problem creating your account.")
        }
    }
    if(_action === 'newBudget') {
        try{
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount,
            })
            return toast.success(`Budget Created!`)
        } catch(e) {
            throw new Error("There was problem creating your budget.")
        }
    }
    if(_action === 'createExpense') {
        try {
            createExpenses({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget,
            })
            return toast.success(`Expense ${values.newExpense} Created!`)
        } catch(e) {
            throw new Error("There was problem creating your expenses.")
        }
    }
    if(_action === 'deleteExpense') {
        try {
            deleteexpenseItem({
                key: "expenses",
                id: values.expenseId,
            })
            return toast.success('Expense deleted!')
        } catch(e) {
            throw new Error("There was problem deleting  your expense.")
        }
    }

}
