import './SelectUser.css'
import { UsersContext } from '../UsersContext'
import { useContext} from 'react'

const SelectUser = () => {

    const {users} = useContext(UsersContext);
    function handleClick(buttonClicked) {
        if(buttonClicked === "CreateNewUser") {
            console.log("Create New User");
        }
    }
    return (
        <section id="select-user">
            <label>Select a user</label>
            <menu>
                {users.map(user => {
                    return <button key={user.id}>{user.name}</button>
                })}
            </menu>
            <div id="create-user">
                <button
                onClick={() => handleClick("CreateNewUser")}>
                    Create new user
                </button>
            </div>
        </section>
    );
}
 
export default SelectUser