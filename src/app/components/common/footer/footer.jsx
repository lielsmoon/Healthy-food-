import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__text">
                <div>© 2022 Healthy Food</div>
            </div>
            <div className="footer__icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100008534884984"
                    target="_blank"
                >
                    <img
                        className="icon"
                        width="30px"
                        src="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png"
                        alt=""
                    />
                </a>
                <a href="https://vk.com/id77247767" target="_blank">
                    <img
                        className="icon"
                        width="30px"
                        src="https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png"
                        alt=""
                    />
                </a>
                <a
                    href="https://instagram.com/elizavetagumenyuk/"
                    target="_blank"
                >
                    <img
                        className="icon"
                        width="30px"
                        src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png"
                        alt=""
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
