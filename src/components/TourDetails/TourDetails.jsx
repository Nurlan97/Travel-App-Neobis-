import React, { useEffect, useState } from 'react'
import './TourDetails.scss'
import mapMarker from '../../images/TourDetailsPage/u_map-marker.svg'
import user1 from '../../images/TourDetailsPage/user1.jpeg'
import user2 from '../../images/TourDetailsPage/user2.webp'
import bg_img from '../../images/TourDetailsPage/tourDetailsPage_main-img.png'
import FormBooking from '../FormBooking/FormBooking'
import { useParams } from 'react-router-dom'
import TourBookingModal from '../TourBookingModal'

const TourDetails = () => {

    const { id } = useParams()

    const users = [
        {
            userName: 'Asan',
            userImg: user1,
            userComment: 'That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat',
        },
        {
            userName: 'Ainura',
            userImg: user2,
            userComment: 'That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat',
        }
    ]

    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false)


    useEffect(() => {
        window.scroll(0, 0)
    }, [])



    return (
        <div className='tourDetails'>

            
            <div
                className="tourDetails__img"
                style={{ backgroundImage: `url(${bg_img})` }}
            >
            </div>

            <div className="tourDetails__info_container">

                <div className="container">
                    <h1 className="tourDetails__title">
                        Mount Fuji
                    </h1>
                    <div className="tourDetails__location__info">
                        <img src={mapMarker} alt="" className="tourDetails__map-marker" />
                        <p className="tourDetails__location">Honshu, Japan</p>
                    </div>
                    <div className="tourDetails__description">
                        <h2 className="tourDetails__description_title">
                            Description
                        </h2>
                        <p className="tourDetails__description_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.
                        </p>
                    </div>
                    <div className="tourDetails__reviews">
                        <h2 className="tourDetails__reviews_title">
                            Reviews
                        </h2>
                        <div className="tourDetails__reviews_comments-container">
                            {users.map((user, index) => (
                                <div key={index}>
                                    <div className="tourDetails__reviews_comment">
                                    
                                        <img src={user.userImg} alt="logo" className="tourDetails__reviews_comment_userImg" />
                                        <p className="tourDetails__reviews_comment_userName">
                                            {user.userName}
                                        </p>
                                    </div>
                                    <div className="tourDetails__reviews_comment_userComment">
                                        {user.userComment}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <button className='tourDetails__button'
                        onClick={() => setModalInfoIsOpen(true)}
                    >Book now</button>

                    <TourBookingModal
                    isOpen={modalInfoIsOpen}
                    setIsOpen={setModalInfoIsOpen}
                    id={id}
                    />
                    

                </div>

            </div>
        </div>
    )
}

export default TourDetails
