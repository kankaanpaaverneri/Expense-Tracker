import { useRef } from 'react';
import './AddNewCategory.css'

const AddNewCategory = ({categories, setCategories}) => {
    const inputValue = useRef();

    function addNewCategoryToCategories(newCategory) {
        if(categories.includes(newCategory))
            return;

        setCategories(prevCategories => {
            const updatedCategories = prevCategories.filter(category => {
                if(category !== "Add new category") return category
            })

            updatedCategories.push(newCategory);
            return updatedCategories;
        });
    }
    return (
        <div id='add-new-category'>
            <h1>Add new category</h1>
            <input ref={inputValue} type='text' />
            <button onClick={() => {
                addNewCategoryToCategories(inputValue.current.value);
            }}>
                Add Category
            </button>
        </div>
    );
}
 
export default AddNewCategory;