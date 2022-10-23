import React from "react";
import CarouselMain from "./Carousel/CarouselMain";
import './MainPage.css';

export default function MainPage() {

    return (
        <div className="Content">
            <div className="Texts">
                <h1>Welcome to my Portfolio Page</h1>
                <p>Here you'll see some of my works, as well as my ReactJS Knowledge</p>
                <CarouselMain/>
            </div>
            
            
        </div>

    );

}