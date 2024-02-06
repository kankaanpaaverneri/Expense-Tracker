import './AddExpense.css'
import { getAllExpenseCategorys } from '../Filter';
import { useEffect, useRef, useState } from 'react';
import AddNewCategory from './AddNewCategory';

const AddExpense = ({selectedUser}) => {
    const [categorySelected, setCategorySelected] = useState();
    const [newCategory, setNewCategory] = useState("");
    //Get all categorys except No filter
    const [categorys, setCategorys] = useState([...getAllExpenseCategorys(
        selectedUser.expenses).slice(1), "Add category"]
    );

    const expenseAmount = useRef();

    useEffect(() => {
        if(newCategory !== "") {
            setCategorys((prevCategorys) => {
                const updatedCategorys = [...prevCategorys];
                updatedCategorys[updatedCategorys.length-1] = newCategory;
                updatedCategorys.push("Add category");
                return updatedCategorys;
            });
            setNewCategory(() => "");
            setCategorySelected(() => categorys[0]);
        }
    }, [newCategory]);

    function handleSelect(identifier) {
        setCategorySelected(identifier);
    }

    function handleAddExpense() {
        console.log(expenseAmount.current.value, categorySelected);
    }

    return (
        <section id='add-expense'>
            <label>Add an expense</label>
            <div className='input-field'>
                <input ref={expenseAmount} type="number"/>€
            </div>
            <select value={categorySelected}>
                {categorys.map((category, index) => {
                    return <option onClick={() => handleSelect(category)} key={index}>{category}</option>
                })}
            </select>
            {categorySelected === "Add category" &&
            <AddNewCategory setNewCategory={setNewCategory}/>}
            <button onClick={() => handleAddExpense()}>Add</button>
            
        </section>
    );
}
 
export default AddExpense;