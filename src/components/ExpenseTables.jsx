import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import { getStartMonth, splitMonths } from '../Time';
import { filterByCategory, filterByMonth, getAllExpenseCategorys } from '../Filter';
import Table from './Table';
import FilterComponent from './FilterComponent';

const ExpenseTables = ({}) => {
    const {users} = useContext(UsersContext);
    const [filterOption, setFilterOption] = useState("No filter");

    return (
        <section id="expense-tables">
            {users.map(user => {
                const startMonth = getStartMonth(user.expenses[0]);
                const months = splitMonths(startMonth);
                return (
                    <div key={user.id} className='user-expense-section'>
                        <FilterComponent
                        categorys={getAllExpenseCategorys(user.expenses)}
                        setOptionSelect={setFilterOption}
                        />
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        {months.map((month, monthIndex) => {
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
                        })}
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;