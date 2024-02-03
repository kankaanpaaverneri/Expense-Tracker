

function isMonthChanged(months, currentMonth) {
    const foundMonth = months.find(month => {
        return currentMonth === month;
    });
    //Month Is changed
    if(!foundMonth) {
        months.push(currentMonth);
        return true;
    }

    //Month hasn't changed
    return false;
}

const Table = ({expenses, currentMonth, startMonth}) => {
    const months = [];
    return (
        <table key={currentMonth}>
            {expenses.map((expense, expenseIndex) => {
                const [_, month, ...rest] = expense.time.split(" ");  
                return month === currentMonth && <tbody key={expenseIndex}>
                    {
                    //Makes sure that header is outputed if month is changed
                     isMonthChanged(months, month) && <tr>
                        <td><b>Expense</b></td>
                        <td><b>Time</b></td>
                        <td><b>Category</b></td>
                    </tr>
                    }
                    <tr>
                        <td>{expense.expenseAmount}</td>
                        <td>{expense.time}</td>
                        <td>{expense.category}</td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            })}
        </table>
    );
}
 
export default Table;