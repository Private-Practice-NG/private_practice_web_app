import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./landingpageimageslider.css";

function onChange() {    
}
function onClickItem() {    
}

export default function LandingPageImageSlider({ images }) {
    return (
        <Carousel showStatus={false} showThumbs={false} showArrows={false} onChange={onChange} onClickItem={onClickItem}>
            {images.map((item) => {
                return (
                    <div key={item.id} className="a-slide">
                        <div className="tint"></div>
                        <img src={item.url} className="slider-image-add"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>{item.caption}</h1>
                            <hr className="horizontal-line" />
                        </div>
                    </div>
                );
            })}
        </Carousel>
    )
}

