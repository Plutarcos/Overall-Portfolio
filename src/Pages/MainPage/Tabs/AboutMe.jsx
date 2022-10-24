import React from 'react';
import './MainPageTabs.css';

import MyPic from '../../../Images/MyPic.jpg'

export default function AboutMe() {
    return (
        <div className='mainPageTabsContent'>
            <div className='aboutMePage'>
                <aside>
                    <img src={MyPic} alt="MyPicture" title="Me at Work's restroom..." width='250px' />
                </aside>
                <h1>Who am I?</h1>
                <p>This guy right here on the left. Yep, that's me. I am someone who can't stand in one place,
                    always trying to do as much as I can to create things and solve problems (as any nerdy kid does).</p>
                <p>Since i was a little kid, i've always loved to create things (slingshots, drawings, diy toys, etc.)
                    and as a 2000's child, i grew up in front of a computer. At 8 years old I was testing all I could test
                    on Windows XP, that's when i found a Game Engine named 'FPS Creator'. Although simple, i was fascinated
                    with the thought that I could create more than just drawings and audio recordings of myself on my computer,
                    I could create the most present thing in my life, GAMES!
                </p>
                <p>That's how all of this starded, with some awlful games made in FPS Creator.</p>
            </div>
        </div>
    );
}