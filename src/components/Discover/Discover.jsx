import React, { useState } from 'react'
import './Discover.scss'
import slider_left_btn from '../../images/discover/arrow__left.png'
import slider_right_btn from '../../images/discover/arrow__right.png'
import TourCard from '../TourCard'

const Discover = () => {
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleNavItemClick = (index) => {
        setActiveNavItem(index)
    }

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
                        {/* <li className="discover__item"><a href="#">Popular</a></li>
                        <li className="discover__item"><a href="#">Featured</a></li>
                        <li className="discover__item"><a href="#">Most Visited</a></li>
                        <li className="discover__item"><a href="#">Europe</a></li>
                        <li className="discover__item"><a href="#">Asia</a></li> */}
                        {
                            ["Popular", "Featured", "Most Visited", "Europe","Asia"].map((item, index) => (
                                <li 
                                    key={index}
                                    className={`discover__item ${activeNavItem === index ? 'active': ""}`}
                                    onClick={() => handleNavItemClick(index)}
                                >
                                    <a href="#">{item}</a>
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
