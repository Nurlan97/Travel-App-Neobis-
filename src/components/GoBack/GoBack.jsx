import React from 'react'
// import { CgArrowLongLeft } from "react-icons/cg";
import goBackBtn from '../../images/TourDetailsPage/goBack.svg'
import './GoBack.scss'

const GoBack = () => {
  const goBack = () => {
    window.history.back()
  }
  return (
    <div className='goBack' onClick={goBack}>
      <div className="goBack__wrapper">
        <img src={goBackBtn} alt="Go Back Button" className='goBack__icon' />
        {/* <CgArrowLongLeft /> */}
        <p className="goBack__text">Go back</p>
      </div>
    </div>


  )
}

export default GoBack
