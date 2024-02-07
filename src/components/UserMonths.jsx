import { getStartMonth, splitMonths } from '../Time';
import Table from './Table';
import FilterComponent from './FilterComponent';
import { filterByCategory, filterByMonth, getCurrentCategorys } from '../Filter';
import { useEffect, useState } from 'react';

const UserMonths = ({user, updateUser}) => {
    
    const [expenses, setExpenses] = useState(user.expenses);
    const [filterOption, setFilterOption] = useState({
        userId: 0,
        option: "No filter"
    });

    const [currentCategorys, setCurrentCategorys] = useState(
        getCurrentCategorys(["No filter", ...user.currentCategorys])
    );

    function onDelete(expenseToBeDeleted) {
        setExpenses(prevExpenses => {
            const updatedExpenses = prevExpenses.filter(prevExpense => {
                if(prevExpense !== expenseToBeDeleted)
                    return prevExpense;
            })

            const categorys = updatedExpenses.map(expense => expense.category);
            if(!categorys.includes(expenseToBeDeleted.category))
                setFilterOption({userId: user.id, option: "No filter"});

            return updatedExpenses;
        });
    }

    useEffect(() => {
        const categories = expenses.map(expense => expense.category);
        setCurrentCategorys(["No filter", ...getCurrentCategorys(categories)]);
        //Need to update the original user state
        updateUser(user.id, expenses, categories);
    }, [expenses]);

    if(expenses.length === 0)
        return <h1>No expenses</h1>

    const startMonth = getStartMonth(expenses[0]);
    const userMonths = splitMonths(startMonth);

    return (
        <>
        <FilterComponent
        categorys={currentCategorys}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        userId={user.id}
        />
        {
            userMonths.map((month, monthIndex) => {
                let filteredExpenses = filterByMonth(expenses, month);
                if(filterOption.option !== "No filter" && user.id === filterOption.userId)
                    filteredExpenses = filterByCategory(filteredExpenses, filterOption.option);
                return (
                    <div className='tables' key={monthIndex}>
                        <h1>{month}</h1>
                        <Table
                        expenses={filteredExpenses}
                        currentMonth={month}
                        onDelete={onDelete}
                        />
                    </div>
                );
            })
        }
        </>
    );
}
 
export default UserMonths;