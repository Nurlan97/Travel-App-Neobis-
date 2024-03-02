import React, { useState } from 'react'
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput'
import { useDispatch, useSelector } from 'react-redux'
import { postBookings } from '../../redux/reducers/bookings'
import { isValidPhoneNumber } from 'react-phone-number-input'
import './FormBooking.scss'
import number_of_people_logo from '../../images/TourBooking/number_of_people.png'

const FormBooking = ({ id }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const isValidForm = isValidPhoneNumber(phoneNumber)


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
            <h2 className='formBooking__title'>Info</h2>
            <p className='formBooking__text'>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>

            <form className='formBooking__form' onSubmit={handleSubmit}>
                <PhoneNumberInput
                    phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} isValidPhoneNumber={isValidPhoneNumber}
                />
                <div className='formBooking__commentsInput_container'>
                    <label className='formBooking__commentsInput_label'>
                        <p className='formBooking__commentsInput_label-text'>
                            Commentaries to trip
                        </p>
                        <input
                            type="text"
                            value={comment}
                            onChange={handleCommentChange} className='PhoneInput formBooking__commentsInput' placeholder='Write your wishes to trip...'
                        />
                    </label>
                </div>
                <div className='formBooking__counterBlock_container'>
                    <p className='formBooking__counter_title'>Commentaries to trip</p>

                    <div className='formBooking__counter_container'>
                        <div className='formBooking__counter_wrapper'>
                            <button
                                type='button'
                                disabled={isDisabledDecrement}
                                onClick={decrement}
                                className='formBooking__counter_decrement'
                            >-</button>

                            <span className='formBooking__counter'>{count}</span>
                            <button
                                type="button"
                                disabled={isDisabledIncrement}
                                onClick={increment}
                                className='formBooking__counter_increment'
                            >+</button>
                        </div>

                        <div className='formBooking__counter_number_of_people_container'>
                            <img src={number_of_people_logo} alt="IMG" />
                            <p className='formBooking__counter_number_of_people'>
                                {`${count} ${count === 1 ? 'person' : 'people'}`}
                            </p>
                        </div>
                    </div>
                </div>

                <button type="submit" disabled={!isValidForm} className='formBooking__submit_btn'>Submit</button>
            </form>

        </>
    )
}

export default FormBooking
