import './FilterComponent.css'

const FilterComponent = ({categorys, setFilterOption, userId}) => {
    function onOptionSelect(identifier) {
        setFilterOption(() => {
            return {
                userId: userId,
                option: identifier
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