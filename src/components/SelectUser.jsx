import './SelectUser.css'
import { UsersContext } from '../UsersContext'
import { useContext, useState, useEffect} from 'react'
import CreateNewUser from './CreateNewUser';

const SelectUser = ({setSelectedUser}) => {
    const {users, addUser, deleteUser} = useContext(UsersContext);
    const [optionButtonSelected, setOptionButtonSelected] = useState("");

    function handleClick(buttonClicked) {
        if(buttonClicked === "CreateNewUser") {
            setOptionButtonSelected("Create");
        }

        if(buttonClicked === "DeleteUser") {
            if(optionButtonSelected === "")
                setOptionButtonSelected("Delete")
            else
                setOptionButtonSelected("");
        }
    }

    useEffect(() => {
        if(optionButtonSelected !== "" &&
        optionButtonSelected !== "Create" &&
        optionButtonSelected !== "Delete"){
            addUser({
                name: optionButtonSelected,
                expenses: [],
                id: users.length > 0 ? users[users.length-1].id + 1 : 1,
            });
            setOptionButtonSelected("");
        }
    }, [optionButtonSelected]);


    return (
        <section id="select-user">
            <label>{optionButtonSelected === "Delete" ? "Select user you want to delete" : "Select user"}</label>
            <menu>
                {users.map(user => {
                    return <button
                        onClick={() => {
                            if(optionButtonSelected !== "Delete")
                                setSelectedUser(user);
                            else {
                                deleteUser(user);
                                setOptionButtonSelected("");
                            }
                        }}
                        key={user.id}>
                        {user.name}
                    </button>
                })}
            </menu>
            <div id="option-buttons">
                <button
                onClick={() => handleClick("CreateNewUser")}>
                    Create new user
                </button>
                <button
                className={`${optionButtonSelected === "Delete" ? "highlight" : ""}`}
                onClick={() => handleClick("DeleteUser")}>
                    Delete User
                </button>
            </div>
            {optionButtonSelected === "Create" &&
            <CreateNewUser
            setCreateNewUser={setOptionButtonSelected}/>}
        </section>
    );
}
 
export default SelectUser