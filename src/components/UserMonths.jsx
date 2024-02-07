import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';
import { filterByCategory, filterByMonth } from '../Filter';

const UserMonths = ({user, filterOption}) => {

    if(user.expenses.length === 0)
        return <h1>No expenses</h1>

    const startMonth = getStartMonth(user.expenses[0]);
    const userMonths = splitMonths(startMonth);
    

    return (
        userMonths.map((month, monthIndex) => {
            let filteredExpenses = filterByMonth(user.expenses, month);
            if(filterOption.option !== "No filter" && user.id === filterOption.userId)
                filteredExpenses = filterByCategory(filteredExpenses, filterOption.option);
            return (
                <div className='tables' key={monthIndex}>
                    <h1>{month}</h1>
                    <Table
                    expenses={filteredExpenses}
                    currentMonth={month}
                    />
                </div>
            );
        })
    );
}
 
export default UserMonths;