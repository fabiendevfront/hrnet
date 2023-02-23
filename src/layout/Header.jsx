import logo from "../assets/logo.png";
import formIcon from "../assets/icons/form.svg";
import listIcon from "../assets/icons/list.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <h1>
                    <img src={logo} className="header__logo" alt="Logo du site Hrnet" />
                </h1>
            </Link>
            <nav className="header__nav">
                <NavLink to="/create-employee" className="header__nav-link">
                    <img className="header__icon" src={formIcon} alt="form icon" />Create employee
                </NavLink>
                <NavLink to="/employee-list" className="header__nav-link">
                    <img className="header__icon" src={listIcon} alt="list icon" />Employee list
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;