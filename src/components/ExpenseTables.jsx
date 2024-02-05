import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import { getAllExpenseCategorys } from '../Filter';
import FilterComponent from './FilterComponent';
import UserMonths from './UserMonths';

const ExpenseTables = () => {
    const {users} = useContext(UsersContext);
    const [filterOption, setFilterOption] = useState("No filter");

    return (
        <section id="expense-tables">
            {users.map(user => {
                return (
                    <div key={user.id} className='user-expense-section'>
                        <FilterComponent
                        categorys={getAllExpenseCategorys(user.expenses)}
                        setOptionSelect={setFilterOption}
                        />
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        <UserMonths user={user} filterOption={filterOption}/>
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;