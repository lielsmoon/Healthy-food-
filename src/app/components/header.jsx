import React from "react";

const Header = () => {
    return (
        <div className="intro">
            <div className="intro_text_container">
                <blockquote>
                    <h1 className="intro_text">
                        „С точки зрения питания мы живём в лучшее и одновременно
                        в худшее из времён.“
                    </h1>
                    <cite> — Светлана Кольчик</cite>
                </blockquote>
            </div>
            <div className="intro_photo">
                <img
                    className="intro_img"
                    src="https://sun9-62.userapi.com/impg/kn2SAOdihRFz0CBZTQ0Bwg3vdOZbuWFOD-Thjg/E7nW_-LpS8E.jpg?size=1368x952&quality=95&sign=09a9fceddc85c2a55270592c8a0cf81f&type=album"
                    alt="Главное фото"
                    height="500px"
                />
            </div>
        </div>
    );
};

export default Header;
