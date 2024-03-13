import React, { useEffect, useState } from 'react'
import './Discover.scss'
import slider_left_btn from '../../images/discover/arrow__left.png'
import slider_right_btn from '../../images/discover/arrow__right.png'
import TourCard from '../TourCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {
    const [activeNavItem, setActiveNavItem] = useState(0);
    const [tours, setTours] = useState([])

    const categories = ["Popular", "Featured", "Most Visited", "Europe", "Asia"]

    const handleNavItemClick = (index) => {
        setActiveNavItem(index)
    }
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    }

    useEffect(() => {
        const fetchTours = async () => {
            try {
                // const response = await axios.get('https://jsonplaceholder.typicode.com/photos/')
                const response = await axios.get('https://muha-backender.org.kg/categories/1/')

                if (response.status === 200) {
                    const keyTours = 'Category Tours';
                    const data = response.data[keyTours]
                    setTours(data)
                    // console.log(data[0].image)
                }
            } catch (err) {
                console.log('Ошибка', err)
            }
        }
        fetchTours()
    }, [])

    return (
        <section className='discover'>
            <div className="container">
                <div className="discover__title_container">
                    <h2 className="discover__title">
                        Discover
                    </h2>
                    <div className="discover__slider_button_container">
                        <img src={slider_left_btn} alt="" />
                        <img src={slider_right_btn} alt="" />
                    </div>

                </div>
                <nav className="discover__navbar">
                    <ul className="discover__list">
                        {
                            categories.map((item, index) => (
                                <li
                                    key={index}
                                    className={`discover__item ${activeNavItem === index ? 'active' : ""}`}
                                    onClick={() => handleNavItemClick(index)}
                                >
                                    <Link to="#">{item}</Link>
                                </li>
                            ))


                        }
                    </ul>
                </nav>

                <div className='tourCard_container'>
                    {/* <TourCard /> */}
                    <Slider {...settings}>
                        {tours.map((tour, index) => (
                            <TourCard
                                key={index}
                                tour={tour}
                            />
                        ))}
                    </Slider>
                </div>


            </div>

        </section>
    )
}

export default Discover
