import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="header__inner">
            <div className="header__logo">Healthy food</div>

            <nav className="nav">
                <Link className="nav__link" to="/main">
                    Главная
                </Link>
                <Link className="nav__link" to="/categories">
                    Категории
                </Link>
                <Link className="nav__link" to="/aboutme">
                    Обо мне
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
