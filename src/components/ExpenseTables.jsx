import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import { getAllExpenseCategorys } from '../Filter';
import FilterComponent from './FilterComponent';
import UserMonths from './UserMonths';

function removeExpense(expenses, expenseToBeRemoved) {
    return expenses.filter(expense => {
        if(expense !== expenseToBeRemoved)
            return expense;
    });
}

const ExpenseTables = () => {
    const {users} = useContext(UsersContext);
    const [filterOption, setFilterOption] = useState({
        userId: 0,
        filter: "No filter",
    });

    const [deleteExpense, setDeleteExpense] = useState();

    return (
        <section id="expense-tables">
            {users.map(user => {
                const currentCategorys = getAllExpenseCategorys(user.expenses);
                if(deleteExpense) {
                    user.expenses = removeExpense(user.expenses, deleteExpense);
                    setDeleteExpense(() => undefined);
                    setFilterOption({
                        userId: user.id,
                        filter: "No filter"
                    });
                }
                
                return (
                    <div key={user.id} className='user-expense-section'>
                        <FilterComponent
                        key={user.expenses.length}
                        categorys={currentCategorys}
                        setOptionSelect={setFilterOption}
                        userId={user.id}
                        />
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        <UserMonths
                        user={user}
                        filterOption={filterOption}
                        setDeleteExpense={setDeleteExpense}
                        />
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;