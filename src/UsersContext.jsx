import { createContext, useState } from "react";

export const UsersContext = createContext({
    users: [],
});

export default function UsersContextProvider({children}) {

    const [users, setUsers] = useState([
        {
            name: "Verneri",
            expenses: [],
            id: 1
        },
        {
            name: "Nea",
            expenses: [],
            id: 2
        }
    ]);

    function addUser(newUser) {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    function deleteUser(userToBeDeleted) {
        setUsers(prevUsers => {
            const foundUser = prevUsers.find(user => user.id === userToBeDeleted.id);
            console.log(foundUser);
            //Delete user
            if(prevUsers.length === 1) {
                prevUsers.pop();
            } else {
                prevUsers.splice(foundUser.id-1, 1);
            }

            //Update ID:s
            prevUsers.forEach((user, index) => user.id = index+1);

            return prevUsers;
        });
    }

    const contextValue = {
        users,
        addUser,
        deleteUser
    }

    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

