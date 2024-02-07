import { useState } from 'react';
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

    const [currentCategorys, setCurrentCategorys] = useState(categorys);
    console.log("currentCategorysState: ", currentCategorys);
    return (
        <section id="filter-component">
            <label>Filter by: </label>
            <select>
                {
                    currentCategorys.map((category) => {
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