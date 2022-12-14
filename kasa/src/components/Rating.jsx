import React from 'react';


const Rating = ({ rating }) => {
    const activeStars = [];
    const inactiveStars = [];

    for(let i=0; i < rating; i++){
        activeStars.push(i);
    }

    for(let i=5; i > rating; i--){
        inactiveStars.push(i);
    }
  
    return (
        <div>
            {activeStars.map((star, index) => (
                <svg key={index} className='star starActive' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                </svg>
            ))}
            {inactiveStars.map((star, index) => (
                <svg key={index} className='star' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                </svg>
            ))}
        </div>
    );
};

export default Rating;