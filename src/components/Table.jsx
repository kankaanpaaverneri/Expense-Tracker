import './Table.css'

const Table = ({expenses, currentMonth}) => {
    return (
        <table key={currentMonth}>
            {expenses.map((expense, expenseIndex) => {
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