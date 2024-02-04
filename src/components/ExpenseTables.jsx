import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext } from 'react';
import { getStartMonth, splitMonths } from '../Time';
import { filterByMonth, getAllExpenseCategorys } from '../Filter';
import Table from './Table';
import FilterComponent from './FilterComponent';

const ExpenseTables = ({}) => {
    const {users} = useContext(UsersContext);
    return (
        <section id="expense-tables">
            {users.map(user => {
                const startMonth = getStartMonth(user.expenses[0]);
                const months = splitMonths(startMonth);
                return (
                    <div key={user.id} className='user-expense-section'>
                        <FilterComponent
                        categorys={getAllExpenseCategorys(user.expenses)}/>
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        {months.map((month, monthIndex) => {
                            const filteredExpense = filterByMonth(user.expenses, month);
                            return (
                                <div className='tables' key={monthIndex}>
                                    <h1>{month}</h1>
                                    <Table
                                    expenses={filteredExpense}
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