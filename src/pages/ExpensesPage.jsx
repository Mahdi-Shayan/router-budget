import { useLoaderData } from "react-router-dom";

// helpers
import { storageData } from "../helpers";

// components
import ExpensesTable from "../components/ExpensesTable";

// Loader
export function expensesLoader() {
    const expenses = JSON.parse(storageData('expenses'));
    return {expenses} ;
}

function ExpensesPage() {
    const { expenses } = useLoaderData();
    
    return (<>
        <div className="all-expenses-container">
            <h1>All Expenses</h1>
            { expenses && expenses.length > 0
                ? (
                    <div className="container">
                        <h2>
                            Recent Expenses <small>({expenses.length} tottal)</small>
                        </h2>
                        <ExpensesTable expenses={expenses}/> 
                    </div>
                )
                : (
                    <p>No Expenses to show</p>
                )
            }
        </div>
    </>);
}

export default ExpensesPage;