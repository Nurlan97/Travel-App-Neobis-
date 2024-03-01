import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import './PhoneNumberInput.scss';

const PhoneNumberInput = ({phoneNumber, setPhoneNumber,isValidPhoneNumber}) => {

    const handleChange = (value) => {
        setPhoneNumber(value ?? "")
    }

    

    return (
        <div className='phoneNumberInput__container'>
            <label className='phoneNumberInput__label'>
                <p className='phoneNumberInput__label-text'>
                    Phone Number
                </p>
                <div>

                    <PhoneInput
                        className='phoneNumberInput'
                        autoComplete='tel-national'
                        limitMaxLength={true}
                        defaultCountry={'KG'}
                        international
                        value={phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </label>
            {!isValidPhoneNumber && <p>Please enter a valid phone number!</p>}
        </div>
    )
}

export default PhoneNumberInput
