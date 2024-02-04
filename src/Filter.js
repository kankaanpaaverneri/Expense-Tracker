
export function filterByMonth(expenses, filterMonth) {
    return expenses.filter(expense => {
        const [weekday, month, ...rest] = expense.time.split(" ");
        if(month === filterMonth)
            return expense;
    })
}