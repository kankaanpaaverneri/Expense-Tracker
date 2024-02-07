import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import UserMonths from './UserMonths';


const ExpenseTables = () => {
    const {users} = useContext(UsersContext);


    return (
        <section id="expense-tables">
            {users.map(user => {
                return (
                    <div key={user.id} className='user-expense-section'>
                        
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        <UserMonths
                        user={user}
                        />
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;