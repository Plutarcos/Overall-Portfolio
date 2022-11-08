import React from 'react';
import './MainPageTabs.css';


export default function mySkills() {

    return (
        <div id='defaultCSS' className='mySkillsPage'>
            <div className='skillIcons'>
                <a className='skillClickable' target="blank" href='https://photos.app.goo.gl/dsQ3TaeKPMKqvpoq9'><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="Photoshop" /></a>
                <a className='skillClickable' target="blank" href='https://soundcloud.com/yuri-franca-124006867'><img src="https://upload.wikimedia.org/wikipedia/pt/7/7e/Fl_studio_logo.png" alt="Fruity Loops" /></a>
                <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" alt="JavaScript" />
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="SQL" />
                <a className='skillClickable' target="blank" href='https://play.google.com/store/apps/details?id=com.MilltopLabs.DUCKED'><img src="https://user-images.githubusercontent.com/25331232/28385575-9d11e2be-6c96-11e7-9883-dad6ea89ba23.png" alt="Unity3D" /></a>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Vegas_Pro_15.0.png" alt="Vegas Pro" />
                <a className='skillClickable' target="blank" href="https://github.com/Plutarcos"><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" /></a>
                <a className='skillClickable' target="blank" href='https://sketchfab.com/Plutarcos/models'><img src="https://findicons.com/files/icons/1007/crystal_like/256/blender.png" alt="Blender" /></a>
                <div className='photoshopGrid'>
                </div>

            </div>
            <img alt="" src="https://github-readme-stats.vercel.app/api?username=Plutarcos&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
            <img alt="" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Plutarcos&layout=compact&langs_count=7&theme=dark" />

        </div>
    )

}