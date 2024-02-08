
import AddExpense from './AddExpense';
import ExpenseTables from './ExpenseTables';
import './UserRoot.css'

const UserRoot = ({selectedUser}) => {
    return <section id="user-root">
        <h1>Welcome {selectedUser.name}</h1>
        <AddExpense selectedUser={selectedUser}/>
        <ExpenseTables/>
    </section>
}
 
export default UserRoot;