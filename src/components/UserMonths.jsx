import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';
import { filterByCategory, filterByMonth } from '../Filter';
import { useState } from 'react';

const UserMonths = ({user, filterOption}) => {

    const startMonth = getStartMonth(user.expenses[0]);
    const userMonths = splitMonths(startMonth);

    const [deleteExpense, setDeleteExpense] = useState("");

    return (
        userMonths.map((month, monthIndex) => {
            let filteredExpense;
            filteredExpense = filterByMonth(user.expenses, month);

            if(filterOption !== "No filter" && user.id === filterOption.userId)
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