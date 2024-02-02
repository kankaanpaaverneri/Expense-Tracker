import expenseTrackerLogo from '/expense-tracker-logo.svg'
import './Header.css'
const Header = () => {
    return (
        <header>
            <img src={expenseTrackerLogo}/>
            <h1>Expense Tracker</h1>
        </header>
    );
}
 
export default Header;