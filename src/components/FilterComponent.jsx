import './FilterComponent.css'

const FilterComponent = ({categorys}) => {
    console.log("categorys: ", categorys);
    return (
        <section id="filter-component">
            <label>Filter by: </label>
            <select>
                <option>No filter</option>
                {
                    categorys.map(category => {
                        return <option>{category}</option>
                    })
                }
            </select>
        </section>
    );
}
 
export default FilterComponent;