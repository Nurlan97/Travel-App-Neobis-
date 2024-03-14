import React from 'react'
import './TourBookingSuccessModal.scss'
import { useSelector } from 'react-redux'

const TourBookingSuccessModal = ({ active, setActive  }) => {

    // const handleClose = () => {
    //     setIsOpen(false)
    // }
    
    const {status} = useSelector((state) => state.bookingSlice)
    console.log(status==='fulfilled')
    return (
        
        <div className={active ? 'tourBookingSuccessModal active' : 'tourBookingSuccessModal'}
            onClick={() => setActive(false)}
        >
            <div className={active ? "tourBookingSuccessModal__content active" : "tourBookingSuccessModal__content"} onClick={e => e.stopPropagation()}>
                <h1 className='tourBookingSuccessModal__content_title'>
                    {status === 'error' ? 'The tour can’t be booked' : 'Your trip has been booked!'}
                    </h1>
                <button
                    className='tourBookingSuccessModal__content_btn'
                    onClick={() => setActive(false)}
                >
                    Ok
                </button>

            </div>
        </div>
    )
}

export default TourBookingSuccessModal
