import { createContext, useEffect, useState } from "react";
import { getCurrentCategorys } from "./Filter";
import { useFetch } from "./hooks/useFetch";
import { fetchDelete, fetchGet, fetchPost } from "./http";

export const UsersContext = createContext({
    users: [],
});

export default function UsersContextProvider({children}) {

    const [users, setUsers] = useState([]);
    const {data, error, setError, loading} = useFetch(fetchGet);

    useEffect(() => {
        setUsers(data);
    }, [data, error, loading]);

    function updateUserCategories(user) {
        const categorys = user.expenses.map(expense => expense.category);
        user.currentCategorys = ["No filter", ...getCurrentCategorys(categorys)];
    }

    function updateAllUsersCategories(users) {
        users.forEach(user => {
            updateUserCategories(user);
        });
        setUsers(() => users);
    }

    useEffect(() => {
        if(users) {
            updateAllUsersCategories(users);
        }
    }, [users]);

    function addUser(newUser) {
        fetchPost("http://localhost:8000/users", newUser)
        .then(() => {
            setUsers((prevUsers) => [...prevUsers, newUser]);
        })
        .catch(error => {
            console.log("Error ocurred while adding user");
            setError(error);
        });   
    }

    function updateUser(userId, expenses = [], categories = []) {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            const userToBeUpdated = updatedUsers.find(user => user.id === userId);
            userToBeUpdated.expenses = [...expenses];
            userToBeUpdated.currentCategorys = [...categories];
            
            fetch(`http://localhost:8000/users/${userId}`, {
                method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userToBeUpdated)
            });

            return updatedUsers;
        });
    }

    function deleteUser(userToBeDeleted) {
        setUsers(prevUsers => {
            prevUsers.forEach((user) => {
                fetchDelete(`http://localhost:8000/users/${user.id}`)
                .catch(error => {
                    console.log("Error while deleting users: ", error);
                });
            });
            const foundUser = prevUsers.find(user => user.id === userToBeDeleted.id);
            //Delete user
            if(prevUsers.length === 1) {
                prevUsers.pop();
            } else {
                prevUsers.splice(foundUser.id-1, 1);
            }

            //Update ID:s
            prevUsers.forEach((user, index) => {
                user.id = index+1;
                fetch(`http://localhost:8000/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(prevUsers[index])
                })
                .catch(error => {
                    console.log("Error occured while updating users: ", error);
                    setError(error);
                })
            });
            
            
            return prevUsers;
        });
    }    

    const contextValue = {
        users,
        loading,
        error,
        addUser,
        deleteUser,
        updateUser
    }
    

    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

