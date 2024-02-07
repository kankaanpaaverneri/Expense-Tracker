
import ExpenseTables from './ExpenseTables';
import './UserRoot.css'

const UserRoot = ({selectedUser}) => {
    return <section id="user-root">
        <h1>Welcome {selectedUser.name}</h1>
        <ExpenseTables/>

    </section>
}
 
export default UserRoot;