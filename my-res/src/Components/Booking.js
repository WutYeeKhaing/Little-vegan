import React from 'react'
import BookingForm from './BookingForm'
const Booking = (props) => {
  return (
    <div>
        <BookingForm avaliableTimes={props.avaliableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </div>
  )
}

export default Booking