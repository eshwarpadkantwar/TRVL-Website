import React, { useState } from "react";
import "../Components/Navbar.css";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleMenuItemClick = () => {
        setClicked(false); // Close the menu when a menu item is clicked
    };

    return (
        <div className="navbaritems">
            <a href="/" className="logoanchor"><h1 className="navbar-logo"><b>TRVL</b></h1></a>

            <div className="menu-icons" onClick={handleClick}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url} onClick={handleMenuItemClick}>
                                <span>
                                    <FontAwesomeIcon icon={item.icons} /> {item.title}
                                </span>
                            </Link>
                        </li>
                    );
                })}
                <Link to="/login"><button>Login</button></Link>
            </ul>
        </div>
    );
}

export default Navbar;
