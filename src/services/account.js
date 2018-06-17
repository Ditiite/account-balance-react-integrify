

export function calculateTotal(initialBalance, transactions) {
    let sum = initialBalance;
    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            sum += transaction.amount;
        } else if (transaction.type === 'expense') {
            sum -= transaction.amount;
        }
    });

    return sum;
}

export function splitIncomeAndExpense(transactions) {
    const incomes = transactions.filter((transaction) => transaction.type === 'income');
    const expenses = transactions.filter((transaction) => transaction.type === 'expense');

    return {
        incomes,
        expenses,
    }
}