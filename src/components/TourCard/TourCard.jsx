import React from 'react'
import { Link } from 'react-router-dom';
import tourCardImg from '../../images/TourCard/TourCard__img.png'
import tourCardImg2 from '../../images/TourCard/TourCard__img2.png'
import tourCardImg3 from '../../images/TourCard/TourCard__img3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TourCard.scss'




const TourCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // appendDots: dots => (
        //     <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        //         <ul style={{ margin: "0px", padding: "20px" }}> {dots} </ul>
        //     </div>
        // ),
        // prevArrow: <button className="slick-prev" aria-label="Previous" type="button">Previous</button>,
        // nextArrow: <button className="slick-next" aria-label="Next" type="button">Next</button>,

      };

    const items = [
        <Link to='/tourDetailsPage' key="1"><img src={tourCardImg} alt="Tour Image 1" /></Link>,
        <div key="2"><img src={tourCardImg2} alt="Tour Image 2" /></div>,
        <div key="2"><img src={tourCardImg3} alt="Tour Image 2" /></div>,
        <div key="1"><img src={tourCardImg} alt="Tour Image 1" /></div>,
        <div key="2"><img src={tourCardImg2} alt="Tour Image 2" /></div>,
        <div key="2"><img src={tourCardImg3} alt="Tour Image 2" /></div>,
        
    ]
    return (
        <>
            <Slider {...settings}>
                {items}
            </Slider>
        </>

    )
}

export default TourCard
