import { useRef } from 'react';
import './AddNewCategory.css'


const AddNewCategory = ({setNewCategory}) => {

    function addCategory() {
        setNewCategory(() => categoryName.current.value);
    }

    const categoryName = useRef();

    return (
        <section id="add-new-category">
            <label>Category name</label>
            <input ref={categoryName} type="text"/>
            <button onClick={() => addCategory()}>Add category</button>
        </section>
    );
}
 
export default AddNewCategory;