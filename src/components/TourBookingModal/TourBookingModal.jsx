import React from 'react'
import TourBooking from '../../features/TourBooking/TourBooking'
import FormBooking from '../FormBooking'
import { useSelector } from 'react-redux'


const TourBookingModal = ({ isOpen, setIsOpen, id }) => {

    const handleClose = () => {
        setIsOpen(false)
    }

    const { status } = useSelector((state) => state.bookingSlice)
    
    return (
        <>
            <TourBooking
                isOpen={isOpen}
                onClose={handleClose}
            >
                <FormBooking id={id} />

            </TourBooking>
        </>
    )
}

export default TourBookingModal
