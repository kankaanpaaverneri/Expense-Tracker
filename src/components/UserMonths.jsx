import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';
import { filterByCategory, filterByMonth } from '../Filter';
const UserMonths = ({user, filterOption}) => {
    const startMonth = getStartMonth(user.expenses[0]);
    const userMonths = splitMonths(startMonth);
    return (
        userMonths.map((month, monthIndex) => {
            const filteredExpense = filterByMonth(user.expenses, month);

            let expensesByCategory;
            if(filterOption !== "No filter")
               expensesByCategory = filterByCategory(filteredExpense, filterOption);

            return (
                <div className='tables' key={monthIndex}>
                    <h1>{month}</h1>
                    <Table
                    expenses={expensesByCategory ? expensesByCategory : filteredExpense}
                    currentMonth={month}
                    />
                </div>
            );
        })
    );
}
 
export default UserMonths;