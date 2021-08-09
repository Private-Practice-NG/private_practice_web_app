import React from 'react'

export default function Rating({ rating, children }) {

    let fullStarCount = 5;
    let halfStarCount = 0;
    let emptyStarCount = 0;
    
    if(rating % Math.floor(rating) !== 0){
        halfStarCount = 1;
    }
    
    fullStarCount = Math.floor(rating);

    emptyStarCount = 5 - (fullStarCount + halfStarCount);

    let generatedRatings = [];

        for (let a = 0; a < fullStarCount; a++) {
            generatedRatings[generatedRatings.length > 0 ? generatedRatings.length : 0] = <i key={generatedRatings.length} className="fa fa-star checked"></i>
        }
        for (let b = 0; b < halfStarCount; b++) {
            generatedRatings[generatedRatings.length > 0 ? generatedRatings.length : 0] = <i key={generatedRatings.length} className="fa fa-star-half-alt checked"></i>              
        }
        for (let c = 0; c < emptyStarCount; c++) {
            generatedRatings[generatedRatings.length > 0 ? generatedRatings.length : 0] = <i key={generatedRatings.length} className="fa fa-star"></i>              
        }

    // console.log(generatedRatings);
    
    return (
        <div className="ratings-container flex-row d-flex">
            <div className="ratings">
                <span className="stars">
                    { generatedRatings }                
                </span>
            </div>
            { children !== null ? children : '' }
        </div>
    )
}
