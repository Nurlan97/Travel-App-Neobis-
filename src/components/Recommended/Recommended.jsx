import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Recommended.scss';
import recommendedImage from '../../images/Recommended/recommended-image.png'
import axios from 'axios';

const Recommended = () => {
    const [toursInfo, setToursInfo] = useState([])

    // const { id } = useParams()    
    // const [id, setId] = useState(1)

    useEffect(() => {
        const fetchTours = async () => {
            try {
                // const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/`)
                const response = await axios.get(`https://muha-backender.org.kg/tours/recommended/`)
                if (response.status === 200) {
                    const keyTours = 'Recommended Tours'
                    const data = response.data[keyTours]
                    setToursInfo(data)
                 }
            } catch (err) {
                console.log('Ошибка', err)
            }
        }
        fetchTours()
    }, [])
    // toursInfo.map(item => console.log(item.thumbnailUrl))
    
    return (
        <section className='recommended'>
            <div className="container">
                <h1 className="recommended__title">
                    Recommended
                </h1>
                    

                    <div className="recommended__tours">
                        {
                            toursInfo && toursInfo.map((item, index) => {
                                return (
                                    <Link to={`/tourDetailsPage/${item.id}`} className="recommended__tour-container" key={index}>
                                        <img src={item.image} alt="" className="recommended__tour" />
                                    </Link>
                                )
                            })
                        }

                    </div>


            </div>

        </section>
    )
}

export default Recommended
