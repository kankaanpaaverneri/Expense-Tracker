import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext } from 'react';
import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';

const ExpenseTables = ({}) => {
    const {users} = useContext(UsersContext);
    return (
        <section id="expense-tables">
            {users.map(user => {
                const startMonth = getStartMonth(user.expenses[0]);
                const months = splitMonths(startMonth);
                return <div key={user.id} className='table-container'>
                    <h1 className='user-name'>{user.name}</h1>
                    <h1>{new Date().getFullYear()}</h1>
                    {months.map((month, monthIndex) => {
                        return <div key={monthIndex}>
                            <h1>{month}</h1>
                            <Table
                            expenses={user.expenses}
                            currentMonth={month}
                            startMonth={startMonth}
                            />
                        </div>
                    })}
                </div>
            })}
        </section>
    );
}
 
export default ExpenseTables;