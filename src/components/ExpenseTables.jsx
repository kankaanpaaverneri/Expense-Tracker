import './ExpenseTables.css'

import { UsersContext } from '../UsersContext';
import { useContext, useState } from 'react';
import UserMonths from './UserMonths';


const ExpenseTables = ({selectedUser}) => {
    const {users, updateUser} = useContext(UsersContext);
    console.log(users);
    return (
        <section key={users[selectedUser.id-1].expenses} id="expense-tables">
            {users.map(user => {
                return (
                    <div key={(user.id / 100).toFixed(2)} className='user-expense-section'>
                        <h1 className='user-name'>{user.name}</h1>
                        <h1>{new Date().getFullYear()}</h1>
                        <UserMonths
                        user={user}
                        updateUser={updateUser}
                        />
                    </div>
                );
            })}
        </section>
    );
}
 
export default ExpenseTables;