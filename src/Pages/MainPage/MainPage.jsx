import React from "react";
import './MainPage.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//Tabs
import AboutMe from "./Tabs/AboutMe";
import MySkills from "./Tabs/MySkills";
import Contact from "./Tabs/Contact";

export default function MainPage() {

    return (
        <div className="Content">
            <div className="Texts">
                <h1>Welcome to my Portfolio Page</h1>
                <p>Here you'll see some of my works, and get to know me a little bit.</p>
            </div>
            <div className="mainPageTabs">
                <Tabs defaultActiveKey="contact" className="uncontrolled-tab">
                    <Tab eventKey="aboutMe" title="About Me">
                        <AboutMe />
                    </Tab>
                    <Tab eventKey="mySkills" title="My Skills">
                        <MySkills />
                    </Tab>
                    <Tab eventKey="contact" title="My Game Leaderboard">
                        <Contact/>
                    </Tab>
                </Tabs>
            </div>


        </div>

    );

}
