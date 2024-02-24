import React from 'react'
import mainImage from '../../images/about/main.png';
import button from '../../images/about/about_button.png';
import './About.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about__container">
                    <div className="about__info">
                        <h1 className='about__title'>
                            Winter <br /> Vacation Trips
                        </h1>
                        <p className="about__subtitle">Enjoy your winter vacations with warmth <br />
                            and amazing sightseeing on the mountains.
                            <br />
                            Enjoy the best experience with us!
                        </p>
                        <a href="#" className='about__button_container'>
                            <img src={button} alt="Button" className="about__button" />

                        </a>
                        {/* <a href="#" className="about__button">Let’s Go!</a> */}
                    </div>
                    <div className="about__img_container">
                        <img src={mainImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
