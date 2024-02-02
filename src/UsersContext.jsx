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

    const contextValue = {
        users,
        addUser,
    }

    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

