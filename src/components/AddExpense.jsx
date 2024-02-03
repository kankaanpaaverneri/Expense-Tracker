import './AddExpense.css'

const AddExpense = ({categorys}) => {
    return (
        <section id="add-expense">
            <label>Add Expense</label>
            <div className='input-fields'>
                <input type="number" />
                <select>
                    {categorys.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}
                </select>
            </div>
            <button>Add</button>
        </section>
    );
}
 
export default AddExpense;