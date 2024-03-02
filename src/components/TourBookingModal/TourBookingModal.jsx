import React from 'react'
import TourBooking from '../../features/TourBooking/TourBooking'
import FormBooking from '../FormBooking'


const TourBookingModal = ({ isOpen, setIsOpen, id }) => {

    const handleClose = () => {
        setIsOpen(false)
    }


    return (
        <>
            <TourBooking
                isOpen={isOpen}
                onClose={handleClose}
            >
                <FormBooking id={id}/>

            </TourBooking>
        </>
    )
}

export default TourBookingModal
