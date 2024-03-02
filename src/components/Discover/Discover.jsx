import React, { useEffect, useState } from 'react'
import './Discover.scss'
import slider_left_btn from '../../images/discover/arrow__left.png'
import slider_right_btn from '../../images/discover/arrow__right.png'
import TourCard from '../TourCard'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Discover = () => {
    const [activeNavItem, setActiveNavItem] = useState(0);
    // const [tours, setTours] = useState([])
    const handleNavItemClick = (index) => {
        setActiveNavItem(index)
    }   

    // useEffect(() => {
    //     const fetchTours = async () => {
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/photos/')

    //             if(response.status === 200) {
    //                 setTours(response.data)
    //                 // console.log(response.data)
    //             } 
    //         } catch (err) {
    //             console.log('Ошибка', err)
    //         }
    //     }
    //     fetchTours()
    // }, [])

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
                            ["Popular", "Featured", "Most Visited", "Europe","Asia"].map((item, index) => (
                                <li 
                                    key={index}
                                    className={`discover__item ${activeNavItem === index ? 'active': ""}`}
                                    onClick={() => handleNavItemClick(index)}
                                >
                                    <Link to="#">{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className="tourCard_container">
                    <TourCard />
                </div>


            </div>

        </section>
    )
}

export default Discover
