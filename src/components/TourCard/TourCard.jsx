import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import tourCardImg from '../../images/TourCard/TourCard__img.png'
import tourCardImg2 from '../../images/TourCard/TourCard__img2.png'
import tourCardImg3 from '../../images/TourCard/TourCard__img3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TourCard.scss'
import axios from 'axios'



const TourCard = ({ tour }) => {

    
    return (
        <>
          
                <Link to={`/tourDetailsPage/${tour.id}`}>
                    <img src={tour.image} alt="IMG" className='tourCard__img'/>
                </Link>
           
        </>

    )
}

export default TourCard
