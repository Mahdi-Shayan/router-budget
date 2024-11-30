// helper
import { calculateSpent, formatCurrency, formatPrcenetage } from "../helpers";

function BudgetItem({budget }) {
    const { id, name, amount, color} = budget;
    const spent = calculateSpent(id);

    return (
        <div className="budget" style={{'--accent': color}}>
            <div className="details">
                <div className="progress-text">
                    <h3>{name}</h3>
                    <h3>{formatCurrency(amount)} Budgeted</h3>
                </div>
                <progress max={amount} value={spent}>
                    {formatPrcenetage(spent / amount)}
                </progress>
                <div className="progress-text">
                    <small>{formatCurrency(spent)} spent</small>
                    <small>{formatCurrency(amount - spent)} remaining</small>
                </div>
            </div>
        </div>
    );
}

export default BudgetItem;