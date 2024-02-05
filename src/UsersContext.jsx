import { createContext, useEffect, useState } from "react";
import { getAllExpenseCategorys } from "./Filter";

export const UsersContext = createContext({
    users: [],
});

export default function UsersContextProvider({children}) {

    const [users, setUsers] = useState([
        {
            name: "Verneri",
            expenses: [
                {
                    time: "Friday Feburary 02 2024 18:11",
                    expenseAmount: 89.99,
                    category: "Restaurant"
                },
                {
                    time: "Friday Feburary 02 2024 18:11",
                    expenseAmount: 89.99,
                    category: "Restaurant"
                },
                {
                    time: "Monday Feburary 05 2024 15:15",
                    expenseAmount: 50.57,
                    category: "Entertainment"
                },
                {
                    time: "Monday March 04 2024 18:45",
                    expenseAmount: 2.00,
                    category: "Restaurant",
                },
                {
                    time: "Tuesday March 05 2024 18:45",
                    expenseAmount: 2.00,
                    category: "Restaurant",
                }
            ],
            id: 1
        },
        {
            name: "Nea",
            expenses: [
                {
                    time: "Friday January 02 2024 18:11",
                    expenseAmount: 18.99,
                    category: "Restaurant"
                },
                {
                    time: "Friday Feburary 02 2024 18:11",
                    expenseAmount: 55.55,
                    category: "Utilities"
                },
                {
                    time: "Monday May 05 2024 15:15",
                    expenseAmount: 10,
                    category: "Entertainment"
                },
                {
                    time: "Monday June 05 2024 18:45",
                    expenseAmount: 10.00,
                    category: "Restaurant",
                }
            ],
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
        deleteUser,
    }

    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

