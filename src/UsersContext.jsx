import { createContext } from "react";

export const UsersContext = createContext({
    users: [],
});

export default function UsersContextProvider({children}) {

    const contextValue = {
        users: [
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
        ]
    }

    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

