'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Slider = () => {
    return (
        <Carousel 
            additionalTransfrom={0} 
            arrows={true} 
            autoPlay={true} 
            autoPlaySpeed={5000} 
            centerMode={false} 
            infinite responsive={responsive} 
            itemClass='item'
        >
            {/* slider card  */}
            <SliderCard 
                image="/images/r1.jpg" 
                name="Mustapha Abubakar"
                role="Web developer"
            />
            <SliderCard 
                image="/images/r2.jpg" 
                name="Mustapha Abubakar"
                role="Software Engineer"
            />
            <SliderCard 
                image="/images/r3.jpg" 
                name="Mustapha Abubakar"
                role="Artificial Intelligence Enthusiast"
            />
        </Carousel>
    )
}

export default Slider