import React from 'react';
import './MainPageTabs.css';

import MyPic from '../../../Images/MyPic.jpg'

export default function AboutMe() {
    return (
        <div className='mainPageTabsContent'>
            <div className='aboutMePage'>
                <aside>
                    <img src={MyPic} title="Me at Work, there isn't many pictures of me alone..." width='250px' />
                </aside>
                <h1>Who am I?</h1>
                <p>This guy right here on the left. Yep, that's me. I am someone who can't stand in one place, always trying to do as much as I can to create 
                    and solve problems (as any nerdy kid does).
                </p>
            </div>
        </div>
    );
}