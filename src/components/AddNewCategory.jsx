import { useRef } from 'react';
import './AddNewCategory.css'

const AddNewCategory = ({setCategorySelected}) => {
    const inputValue = useRef();
    return (
        <div id='add-new-category'>
            <h1>Add new category</h1>
            <input ref={inputValue} type='text' />
            <button onClick={() => setCategorySelected(inputValue.current.value)}>
                Add Category
            </button>
        </div>
    );
}
 
export default AddNewCategory;