import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
import './UserRoot.css'

const UserRoot = ({selectedUser}) => {
    function getAllGategorys() {
        categorys.push(selectedUser.expenses[0].category);
        selectedUser.expenses.forEach(expense => {
            const foundCategory = categorys.find(category => {
                return category === expense.category;
            });

            if(!foundCategory)
                categorys.push(expense.category);
        });
    }
    const categorys = [];
    if(selectedUser.expenses.length > 0) {
        getAllGategorys();
    }

    return (
        <section id="user-root">
            <h1>Welcome {selectedUser.name}</h1>
            <AddExpense categorys={categorys}/>
            <ExpenseTable selectedUser={selectedUser}/>
        </section>
    );
}
 
export default UserRoot;