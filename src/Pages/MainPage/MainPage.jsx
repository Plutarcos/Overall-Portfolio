import React from "react";
import './MainPage.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//Tabs
import AboutMe from "./Tabs/AboutMe";
import MySkills from "./Tabs/MySkills";

export default function MainPage() {

    return (
        <div className="Content">
            <div className="Texts">
                <h1>Welcome to my Portfolio Page</h1>
                <p>Here you'll see some of my works, and get to know me a little bit.</p>
            </div>
            <div className="mainPageTabs">
                <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="aboutMe" title="About Me">
                        <AboutMe/>
                    </Tab>
                    <Tab eventKey="mySkills" title="My Skills">
                        <MySkills/>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <p>Contact Info</p>
                    </Tab>
                </Tabs>
            </div>


        </div>

    );

}