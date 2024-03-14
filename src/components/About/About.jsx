import React from 'react'
import mainImage from '../../images/about/main.png';
import button from '../../images/about/about_button.png';
import './About.scss';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const About = () => {

    const handleBtn = () => {
        console.log(window.scroll(0, 500))
    }

    // const dispatch = useDispatch() 

    // const [state, setState] = useState('popular')

    // useEffect(() => {
    //     dispatch(getTours(state))
    // }, [state])


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
                        <div className='about__button_container'
                            onClick={handleBtn}
                        >
                            {/* <img src={button} alt="Button" className="about__button" /> */}
                            <Link to="/">
                                <p className='about__button'>
                                    Let's Go!
                                </p>

                            </Link>
                            <div className='about__button_arrow'><HiOutlineArrowNarrowRight /></div>

                        </div>
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
