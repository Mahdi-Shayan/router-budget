import ExpenseItem from "./ExpenseItem";

function ExpensesTable({expenses}) {
    return (<>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ['Name', 'Amount', 'Date'].map((i, ind) => (
                                    <td key={ind}>{i}</td>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <ExpenseItem expense={expense}/>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    </>);
}

export default ExpensesTable;