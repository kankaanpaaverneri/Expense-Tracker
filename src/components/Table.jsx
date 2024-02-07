import './Table.css'

const Table = ({expenses, currentMonth}) => {
    let sum = 0;
    return (
        <table key={currentMonth}>
            {expenses.map((expense, expenseIndex) => {
                sum += expense.expenseAmount;
                return <tbody key={expenseIndex}>
                    {
                     expenseIndex === 0 && <tr>
                        <td><b>Expense</b></td>
                        <td><b>Time</b></td>
                        <td><b>Category</b></td>
                        <td><b>Option</b></td>
                    </tr>
                    }
                    <tr>
                        <td>{expense.expenseAmount.toFixed(2)}€</td>
                        <td>{expense.time}</td>
                        <td>{expense.category}</td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            })}
            {
                expenses.length > 0 &&
                <tbody>
                    <tr>
                        <td><b>{sum.toFixed(2)}€</b></td>
                    </tr>
                </tbody>
            }
        </table>
    );
}
 
export default Table;