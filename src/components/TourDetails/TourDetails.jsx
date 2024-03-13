import React, { useEffect, useState } from 'react'
import './TourDetails.scss'
import mapMarker from '../../images/TourDetailsPage/u_map-marker.svg'
import FormBooking from '../FormBooking/FormBooking'
import { useParams } from 'react-router-dom'
import TourBookingModal from '../TourBookingModal'
import { useDispatch, useSelector } from 'react-redux'
import { getTourById } from '../../redux/reducers/tour'
import { getReviewsById } from '../../redux/reducers/reviews'

const TourDetails = () => {
    const dispatch = useDispatch()
    const { status, tour } = useSelector((state) => state.tourSlice)
    
    const { review } = useSelector((state) => state.reviewSlice)
    
    const { id } = useParams()

    

    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false)


    useEffect(() => {
        window.scroll(0, 0)
        dispatch(getTourById(id))
        dispatch(getReviewsById(id))

    }, [])

    const tourKey = 'Tour Info'
    
    return (
        <div className='tourDetails'>


            <div
                className="tourDetails__img"
                style={{ backgroundImage: `url(${tour[tourKey]?.image})` }}
            >
            </div>

            <div className="tourDetails__info_container">

                <div className="container">
                    <h1 className="tourDetails__title">
                        {tour[tourKey]?.name}
                    </h1>
                    <div className="tourDetails__location__info">
                        <img src={mapMarker} alt="" className="tourDetails__map-marker" />
                        <p className="tourDetails__location">{tour[tourKey]?.name}, {tour[tourKey]?.location}</p>
                    </div>
                    <div className="tourDetails__description">
                        <h2 className="tourDetails__description_title">
                            Description
                        </h2>
                        <p className="tourDetails__description_text">
                            {tour[tourKey]?.description}
                        </p>
                    </div>
                    <div className="tourDetails__reviews">
                        <h2 className="tourDetails__reviews_title">
                            Reviews
                        </h2>
                        <div className="tourDetails__reviews_comments-container">
                            {review.Reviews && review.Reviews.map((user, index) => (
                                <div key={index}>
                                    <div className="tourDetails__reviews_comment">

                                        <img src={user.image} alt="logo" className="tourDetails__reviews_comment_userImg" />
                                        <p className="tourDetails__reviews_comment_userName">
                                            {user.nickname}
                                        </p>
                                    </div>
                                    <div className="tourDetails__reviews_comment_userComment">
                                        {user.review_text}
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
