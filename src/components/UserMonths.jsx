import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';
import { filterByCategory, filterByMonth } from '../Filter';

const UserMonths = ({user, filterOption, setDeleteExpense}) => {

    if(user.expenses.length === 0)
        return <h1>No expenses</h1>

    const startMonth = getStartMonth(user.expenses[0]);
    const userMonths = splitMonths(startMonth);

    return (
        userMonths.map((month, monthIndex) => {
            let filteredExpense = filterByMonth(user.expenses, month);

            if(filterOption.filter !== "No filter" && user.id === filterOption.userId)
               filteredExpense = filterByCategory(filteredExpense, filterOption.filter);

            return (
                <div className='tables' key={monthIndex}>
                    <h1>{month}</h1>
                    <Table
                    expenses={filteredExpense}
                    currentMonth={month}
                    setDeleteExpense={setDeleteExpense}
                    />
                </div>
            );
        })
    );
}
 
export default UserMonths;