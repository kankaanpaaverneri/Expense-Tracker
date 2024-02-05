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
                {
                    categorys.map((category) => {
                        return (
                            <option 
                                onClick={() => onOptionSelect(category)}
                                key={category}>
                                {category}
                            </option>
                        );
                    })
                }
            </select>
        </section>
    );
};
 
export default FilterComponent;