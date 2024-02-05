import './FilterComponent.css'

const FilterComponent = ({categorys, setOptionSelect, userId}) => {
    function onOptionSelect(identifier) {
        setOptionSelect(() => {
            return {
                userId: userId,
                filter: identifier
            }
        });
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