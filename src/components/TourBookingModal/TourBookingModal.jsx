import React, { useState } from 'react'
import TourBooking from '../../features/TourBooking/TourBooking'
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput'
import { useDispatch, useSelector } from 'react-redux'
import { postBookings } from '../../redux/reducers/bookings'
import { isValidPhoneNumber } from 'react-phone-number-input'

const FormBooking = ({ isOpen, setIsOpen, id }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const isValidForm = isValidPhoneNumber(phoneNumber)

    const handleClose = () => {
        setIsOpen(false)
    }
    const dispatch = useDispatch()

    const [count, setCount] = useState(1);
    const [comment, setComment] = useState('')
    const { status } = useSelector(state => state.bookingSlice)
    console.log(status)

    const isDisabledIncrement = count === 6
    const isDisabledDecrement = count === 1

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newData = {
            id,
            // tel,
            comment,
            count
        }

        dispatch(postBookings(newData))
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <>
            <TourBooking
                isOpen={isOpen}
                onClose={handleClose}
            >

                <h2 className='tourBooking__title'>Info</h2>
                <p className='tourBooking__text'>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>

                <form className='tourBooking__form' onSubmit={handleSubmit}>
                    <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} isValidPhoneNumber={isValidPhoneNumber} />
                    <label className='commentsInput__label'>
                        <p className='commentsInput__label-text'>
                            Commentaries to trip
                        </p>
                        <input type="text" value={comment} onChange={handleCommentChange} className='PhoneInput' />
                    </label>
                    <div>

                        <button type='button' disabled={isDisabledDecrement} onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button type="button" disabled={isDisabledIncrement} onClick={increment}>+</button>
                    </div>

                    <button type="submit" disabled={!isValidForm} >Submit</button>
                </form>

            </TourBooking>
        </>
    )
}

export default FormBooking
