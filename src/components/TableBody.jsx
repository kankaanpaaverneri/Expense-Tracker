

const TableBody = ({expense}) => {
    

    return (
        <tbody>
            <tr>
                <td>{expense.category}</td>
                <td>{expense.expenseAmount}</td>
            </tr>
        </tbody>
    );
}
 
export default TableBody;