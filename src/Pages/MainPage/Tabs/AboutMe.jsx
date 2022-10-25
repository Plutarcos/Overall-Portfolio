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
                
                <p>Since I was a little kid, I've always loved to create things (slingshots, drawings, DIY toys, etc.)
                    and as a 2000's child, I grew up in front of a computer. At 8 years old I was testing all I could test
                    on Windows XP, that's when I found a Game Engine named 'FPS Creator'. Although simple, I was fascinated
                    with the thought that I could create more than just drawings and audio recordings of myself on my computer,
                    I could create the most present thing in my life, GAMES!</p>
                
                <p>That's how all of this starded, with some awlful games made in FPS Creator. In 2010 I've met
                    RPG Maker, another Game Engine which provides tools to develop JRPG games. A few years later
                    I got a new computer which could run Unity Engine, and that was the moment I fell into the 
                    programming world.</p>
                
                <p>With Unity Engine, I've learned the basics of JavaScript and C# (At least enought to make
                    a few 2D platform games, FPS, TPS, I even got the chance to develop a Mobile VR game in which
                    the player had to avoid obstacles on a road. I was 14 years old at the time and at the peak
                    of my creativity, so I used all the tools I could found to create.
                </p>

                <p>I needed artwork for the games, so I've learned Photoshop. Then i needed publicity videos 
                    to share my games on youtube and groups, so I started to learn video editing (with Vegas Pro and Adobe Premiere).
                    The music and sound effect for my games I made with some instruments and audio editing and mixing. The more
                    I used in my games, the more I needed to learn new things.
                </p>

                <p>In 2020, after finishing my System Analysis an Development course, I created MilltopLabs.
                    It was important to me, although it isn't a proper company yet, I finally got courage to
                    start developing games for other people rather than my family and friends.
                </p>
            </div>
        </div>
    );
}