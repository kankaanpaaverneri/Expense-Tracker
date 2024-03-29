
export function filterByMonth(expenses, filterMonth) {
    return expenses.filter(expense => {
        const [weekday, month, ...rest] = expense.time.split(" ");
        if(month === filterMonth)
            return expense;
    })
}

export function getAllExpenseCategorys(expenses) {
    const categorys = ["No Filter"];
    expenses.forEach(expense => {
        if(categorys.length === 0)
            categorys.push(expense.category);

        if(!categorys.find(category => expense.category === category)) {
            categorys.push(expense.category);
        }
    });
    return categorys;
}

export function filterByCategory(expenses, category) {
    return expenses.filter((expense) => {
        if(expense.category === category)
            return expense;
    });
}

export function getCurrentCategorys(expenseCategorys) {
    const uniqueCategorys = expenseCategorys.reduce((accumulator, current) => {
        if(!accumulator.includes(current))
            accumulator.push(current)
        return accumulator;
    }, [])
    return uniqueCategorys;
}