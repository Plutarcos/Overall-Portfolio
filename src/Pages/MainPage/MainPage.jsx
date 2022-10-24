import React from "react";
import './MainPage.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AboutMe from "./Tabs/AboutMe";

export default function MainPage() {

    return (
        <div className="Content">
            <div className="Texts">
                <h1>Welcome to my Portfolio Page</h1>
                <p>Here you'll see some of my works, as well as my ReactJS Knowledge.</p>
            </div>
            <div className="mainPageTabs">
                <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="aboutMe" title="About Me">
                        <AboutMe/>
                    </Tab>
                    <Tab eventKey="mySkills" title="My Skills">
                        <p>My Skills</p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <p>Contact Info</p>
                    </Tab>
                </Tabs>
            </div>


        </div>

    );

}