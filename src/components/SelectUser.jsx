import './SelectUser.css'
import { UsersContext } from '../UsersContext'
import { useContext, useState, useEffect} from 'react'
import CreateNewUser from './CreateNewUser';

const SelectUser = ({setSelectedUser}) => {
    const {users, addUser} = useContext(UsersContext);
    const [createNewUser, setCreateNewUser] = useState("");

    function handleClick(buttonClicked) {
        if(buttonClicked === "CreateNewUser") {
            setCreateNewUser("Create");
        }
    }

    useEffect(() => {
        if(createNewUser !== "" && createNewUser !== "Create"){
            addUser({
                name: createNewUser,
                expenses: [],
                id: users[users.length-1].id + 1,
            });
            setCreateNewUser("");
        }
    }, [createNewUser]);


    return (
        <section id="select-user">
            <label>Select a user</label>
            <menu>
                {users.map(user => {
                    return <button
                        onClick={() => {setSelectedUser(user)}}
                        key={user.id}>
                        {user.name}
                    </button>
                })}
            </menu>
            <div id="create-user">
                <button
                onClick={() => handleClick("CreateNewUser")}>
                    Create new user
                </button>
            </div>
            {createNewUser === "Create" &&
            <CreateNewUser
            setCreateNewUser={setCreateNewUser}/>}
        </section>
    );
}
 
export default SelectUser