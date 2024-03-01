import React from 'react'
import './TourBooking.scss'
import { GrClose } from "react-icons/gr";

const TourBooking = ({ isOpen, onClose, children }) => {
    return (
        <>

            { isOpen && (
                <div className='tourBooking'>
                    <div className="tourBooking-wrapper">
                        <div className="tourBooking-content">
                            <button className="tourBooking-btn"
                                onClick={() => onClose()}>
                                <GrClose />
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TourBooking
