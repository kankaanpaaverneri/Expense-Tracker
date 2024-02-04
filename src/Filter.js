
export function filterByMonth(expenses, filterMonth) {
    return expenses.filter(expense => {
        const [weekday, month, ...rest] = expense.time.split(" ");
        if(month === filterMonth)
            return expense;
    })
}

export function getAllExpenseCategorys(expenses) {
    const categorys = [];
    expenses.forEach(expense => {
        if(categorys.length === 0)
            categorys.push(expense.category);

        if(!categorys.find(category => expense.category === category)) {
            categorys.push(expense.category);
        }
    });
    return categorys;
}