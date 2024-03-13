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

    // const [tours, setTours] = useState([])

    
        // appendDots: dots => (
        //     <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        //         <ul style={{ margin: "0px", padding: "20px" }}> {dots} </ul>
        //     </div>
        // ),
        // prevArrow: <button className="slick-prev" aria-label="Previous" type="button">Previous</button>,
        // nextArrow: <button className="slick-next" aria-label="Next" type="button">Next</button>,



    //   useEffect(() => {
    //     const fetchTours = async () => {
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/photos/')

    //             if(response.status === 200) {
    //                 setTours(response.data)
    //                 console.log(response.data)
    //             } 
    //         } catch (err) {
    //             console.log('Ошибка', err)
    //         }
    //     }
    //     fetchTours()
    // }, [])

    // const items = [
    //     <Link to='/tourDetailsPage' key="1"><img src={tourCardImg} alt="Tour Image 1" /></Link>,
    //     <Link to='/tourDetailsPage'  key="2"><img src={tourCardImg2} alt="Tour Image 2" /></Link>,
    //     <Link to='/tourDetailsPage'  key="3"><img src={tourCardImg3} alt="Tour Image 2" /></Link>,
    //     <Link to='/tourDetailsPage'  key="1"><img src={tourCardImg} alt="Tour Image 1" /></Link>,
    //     <Link to='/tourDetailsPage'  key="2"><img src={tourCardImg2} alt="Tour Image 2" /></Link>,
    //     <Link to='/tourDetailsPage'  key="3"><img src={tourCardImg3} alt="Tour Image 2" /></Link>,

    // ]
    return (
        <>
          
                <Link to={`/tourDetailsPage/${tour.id}`}>
                    <img src={tour.image} alt="IMG" />
                </Link>
           
        </>

    )
}

export default TourCard
