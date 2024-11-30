
// Local storage
export function storageData(key) {
    return localStorage.getItem(key)
}

// Delete item 
export function deleteItem(key) {
    return localStorage.removeItem(key)
}

//create color 
export function randomColor() {
    const existingBudgetLength = JSON.parse(storageData('budget')) ?.length ?? 0;
    return `${existingBudgetLength * 34} 75% 45%`
}

// Create new budget
export function createBudget({name, amount}) {
    
    const newItem = {
        id: crypto.randomUUID(),
        name,
        createAt: Date.now(),
        amount: +amount,
        color: randomColor(),
    }

    const isExsitingBudget = JSON.parse(storageData('budget')) ?? [];

    return localStorage.setItem('budget', JSON.stringify([...isExsitingBudget, newItem]))
}

// Create new expense
export function createExpenses({name, amount, budgetId}) {
    
    const newItem = {
        id: crypto.randomUUID(),
        name,
        createAt: Date.now(),
        amount: +amount,
        budgetId,
    }

    const isExsitingExpenses = JSON.parse(storageData('expenses')) ?? [];

    return localStorage.setItem('expenses', JSON.stringify([...isExsitingExpenses, newItem]))
}

// delete item from expense 
export function deleteexpenseItem({key, id}) {
    const existingData = JSON.parse(storageData(key));
    if(id) {
        const newData = existingData.filter(item => item.id !== id);
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key);
}

// total spent by budget 
export function calculateSpent(budgetId) {
    const expenses = JSON.parse(storageData('expenses')) ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
        if(expense.budgetId !== budgetId) return acc

        return acc += expense.amount;
    }, 0)

    return budgetSpent;
}

// FORMATTING

// Foramt currency
export function formatCurrency(amount) {
    return amount.toLocaleString(undefined, {
        style: 'currency',
        currency: "USD",
    });
}

// Format perecentages
export function formatPrcenetage(amt) {
    return amt.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0,
    })
}

// Format date
export function formatDate(epoch) {
    return new Date(epoch).toLocaleDateString()
}