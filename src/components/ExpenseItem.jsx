import { Form } from "react-router-dom";

// hrlpers
import { formatCurrency, formatDate } from "../helpers";

// library
import { BsTrash3Fill } from "react-icons/bs";

function ExpenseItem({expense}) {
    const { id, name, amount, createAt} = expense;

    return (<>
        <td>{name}</td>
        <td>{formatCurrency(amount)}</td>
        <td>{formatDate(createAt)}</td>
        <td>
            <Form method="post">
                <input type="hidden" name="_action" value={'deleteExpense'} />
                <input type="hidden" name="expenseId" value={id} />
                <button 
                    type="submit"
                    className="delete-expense"
                    aria-label={`Delete ${id} expense`}
                    >
                    <BsTrash3Fill />
                </button>
            </Form>
        </td>
    </>);
}

export default ExpenseItem;