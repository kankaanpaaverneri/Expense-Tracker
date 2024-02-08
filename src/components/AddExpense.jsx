import { useEffect, useState } from 'react';
import './AddExpense.css'
import AddNewCategory from './AddNewCategory';

const AddExpense = ({selectedUser}) => {
    const [categorySelected, setCategorySelected] = useState("");

    function handleCategorySelect(identifier) {
        setCategorySelected(identifier);
    }

    useEffect(() => {
        if(!selectedUser.currentCategorys.includes(categorySelected) && categorySelected !== "Add new category")
        {
            selectedUser.currentCategorys.push(categorySelected);
            setCategorySelected(selectedUser.currentCategorys[0]);
        }
    }, [categorySelected]);


    const categories = selectedUser.currentCategorys.slice(1);

    return (
        <section id="add-expense">
            <div className="input-field">
                <input type="number" />
                <select key={selectedUser.currentCategorys.length}>
                    {
                        categories.map(category => {
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
            <AddNewCategory setCategorySelected={setCategorySelected}/>
            }
            <div className="submit-button">
                <button>Add expense</button>
            </div>
        </section>
    );
}
 
export default AddExpense;