import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
    return (
        <div className="navbar__inner">
            <div className="navbar__logo">Healthy Food</div>

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
                <Link className="nav__link" to="/login">
                    Войти
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
