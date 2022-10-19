import React from "react";
import './Header.css';

export default function Header(){

    return(
        <div className="MainHeader">

            <div id="Dropdown">
                <h1>Dropdown</h1>
            </div>

            <div id="Title">
                <h1>Yuri de França</h1>
            </div>

            <div id="Social-Widgets">
                <a target="blank" href="https://github.com/Plutarcos"><img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Github" height="30" /></a>
                <a target="blank" href="https://www.linkedin.com/in/yuridfrança/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" height="30" /></a>
                <a target="blank" href="https://www.instagram.com/yuripfranca/"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-2433-thumb.png" alt="Instagram" height="30" /></a>
                <a target="blank" href="https://t.me/Plutarcvs"><img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png" alt="Telegram" height="30" /></a>
            </div>

        </div>

    );

}