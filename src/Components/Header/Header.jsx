import React from "react";
import './Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Header() {

    return (
        <div className="MainHeader">

            <div id="Dropdown">
                <h1>Menu</h1>
                <div class="Dropdown-content">
                    <Router>
                        <Link to="/">Main Page</Link>
                        <Link to="/MilltopLabs">MilltopLabs</Link>
                        <Link to="/">Pictures</Link>
                    </Router>
                </div>
            </div>



            {/* //Social Network Links */}
            <div id="Social-Widgets">
                <a target="blank" href="https://github.com/Plutarcos"><img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Github" /></a>
                <a target="blank" href="https://www.linkedin.com/in/yuridfrança/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
                <a target="blank" href="https://www.instagram.com/yuripfranca/"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-2433-thumb.png" alt="Instagram" /></a>
                <a target="blank" href="https://t.me/Plutarcvs"><img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png" alt="Telegram" /></a>
            </div>

        </div>

    );

}