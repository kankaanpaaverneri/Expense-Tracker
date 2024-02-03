import './ExpenseTable.css'
import TableBody from './TableBody'
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentTime = new Date();
const timeInfo = `${weekdays[currentTime.getDay()]} ${months[currentTime.getMonth()]} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;

function getUserFirstMonth( selectedUser ) {

    if(selectedUser.expenses.length === 0)
        return "No expenses";

    const firstExpenseTime = selectedUser.expenses[0].time;
    const [_, month, ...rest] = firstExpenseTime.split(" ");
    return month;
}

function spliceMonths(firstMonth) {
    const indexOfFirstMonth = months.indexOf(firstMonth);
    months.splice(0, indexOfFirstMonth);
}

const ExpenseTable = ({selectedUser}) => {

    //Get first month
    const firstMonth = getUserFirstMonth(selectedUser);
    if(firstMonth) {
        spliceMonths(firstMonth);
    }

    return (
        <section id="expense-table">
            <div className='months'>
                <h1>{currentTime.getFullYear()}</h1>
                {months.map((month, index) => {
                    return <div key={index} className='month'>
                        <h1>{month}</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>Category</td>
                                    <td>Expense</td>
                                </tr>
                            </thead>
                            {selectedUser.expenses.map((expense, index) => {
                                const [_, expenseMonth, ...rest] = expense.time.split(" ");

                                if(expenseMonth === month) {
                                    return <TableBody
                                    key={index}
                                    expense={expense}
                                    />
                                }
                            })}
                        </table>
                    </div>
                })}
            </div>
        </section>
    );
}
 
export default ExpenseTable;