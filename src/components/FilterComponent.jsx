import './FilterComponent.css'

const FilterComponent = ({categorys, setOptionSelect}) => {
    function onOptionSelect(identifier) {
        setOptionSelect(identifier);
    }
    return (
        <section id="filter-component">
            <label>Filter by: </label>
            <select>
                <option onClick={() => onOptionSelect("No filter")}>No filter</option>
                {
                    categorys.map((category, index) => {
                        return <option onClick={() => onOptionSelect(category)} key={index}>{category}</option>
                    })
                }
            </select>
        </section>
    );
};
 
export default FilterComponent;