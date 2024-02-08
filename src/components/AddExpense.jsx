import { useContext, useEffect, useRef, useState } from 'react';
import { UsersContext } from '../UsersContext';
import './AddExpense.css'
import AddNewCategory from './AddNewCategory';
import { getCurrentTime } from '../Time';
import { getCurrentCategorys } from '../Filter';

const AddExpense = ({selectedUser}) => {
    const {updateUser} = useContext(UsersContext);
    const expenseAmount = useRef();
    const [categories, setCategories] = useState(selectedUser.currentCategorys.slice(1));
    const [categorySelected, setCategorySelected] = useState(categories[0]);

    function handleCategorySelect(identifier) {
        setCategorySelected(identifier);
    }

    function handleAddingNewExpense() {
        selectedUser.expenses.push({
            time: getCurrentTime(),
            expenseAmount: Number(expenseAmount.current.value),
            category: categorySelected,
        });
        
        setCategories(prevCategories => {
            const updatedCategories = prevCategories.filter(category => {
                if(category !== "Add new category") return category;
            });

            updatedCategories.push(categorySelected);
            const uniqueCategories = getCurrentCategorys(updatedCategories);
            return uniqueCategories;
        });
    }
    
    useEffect(() => {
        updateUser(selectedUser.id, selectedUser.expenses, selectedUser.currentCategorys.slice(1));
    }, [categories]);

    return (
        <section id="add-expense">
            <div className="input-field">
                <input ref={expenseAmount} type="number" />
                <select>
                    {
                        categories.map((category) => {
                            return (
                                <option
                                onClick={() => handleCategorySelect(category)} key={category}>
                                    {category}
                                </option>
                            );
                        })
                    }
                    <option
                        onClick={() => handleCategorySelect("Add new category")}
                        key={"Add new category"}>Add new category</option>
                </select>
            </div>
            {
            categorySelected === "Add new category" &&
            <AddNewCategory
            setCategorySelected={setCategorySelected}
            categories={categories}
            setCategories={setCategories}
            />
            }
            {
                categorySelected !== "Add new category" &&
                <div className="submit-button">
                <button onClick={() => handleAddingNewExpense()}>Add expense</button>
            </div>
            }
        </section>
    );
}
 
export default AddExpense;