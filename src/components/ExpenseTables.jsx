import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import UserMonths from './UserMonths';
import FilterComponent from './FilterComponent';


const ExpenseTables = () => {
    const {users} = useContext(UsersContext);
    const [filterOption, setFilterOption] = useState({
        userId: 0,
        option: "No filter"
    });

    return (
        <section id="expense-tables">
            
            {users.map(user => {
                return (
                    <div key={user.id} className='user-expense-section'>
                        <FilterComponent
                        categorys={user.currentCategorys}
                        setFilterOption={setFilterOption}
                        userId={user.id}
                        />
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        <UserMonths
                        user={user}
                        filterOption={filterOption}
                        />
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;