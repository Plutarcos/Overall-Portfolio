import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <div className="MainHeader">

            <div id="Dropdown">
                <h1><img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" width='50px' alt="" /></h1>
                <div class="Dropdown-content">

                    <Link to="/Overall-Portfolio">Main Page</Link>
                    <Link to="/Overall-Portfolio/MilltopLabs">MilltopLabs</Link>
                    <Link to="/Overall-Portfolio">Works</Link>

                </div>
            </div>

            <p>You can try and find some of the hidden Easter Eggs in the pages</p>

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