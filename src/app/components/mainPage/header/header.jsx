import React from "react";
import "./header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="header__text_container">
                <blockquote>
                    <h1 className="header__text">
                        „С точки зрения питания мы живём в лучшее и одновременно
                        в худшее из времён.“
                    </h1>
                    <cite> — Светлана Кольчик</cite>
                </blockquote>
            </div>
            <div className="intro__img_container">
                <img
                    className="intro__img"
                    src="https://sun9-62.userapi.com/impg/kn2SAOdihRFz0CBZTQ0Bwg3vdOZbuWFOD-Thjg/E7nW_-LpS8E.jpg?size=1368x952&quality=95&sign=09a9fceddc85c2a55270592c8a0cf81f&type=album"
                    alt="Главное фото"
                />
            </div>
        </div>
    );
};

export default Header;
