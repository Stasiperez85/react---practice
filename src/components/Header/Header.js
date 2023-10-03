import logo from '../../assets/investment-calculator-logo.png';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.hearder}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    )
};

export default Header;