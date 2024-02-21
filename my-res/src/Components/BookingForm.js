import React, { useState } from 'react'

const BookingForm = (props) => {
    const[date,setDate]=useState("");
    const[times,setTimes]=useState("");
    const[guests,setGuests]=useState("");
    const[occasion,setOccasion]=useState("");
    const[place,setPlace]=useState('indoor')


    const handleSubmit =(e)=>{
        e.preventDefault();
        props.submitForm(e);
    }
    const HandleOnChange =(e)=>{
       setDate(e);
       props.dispatch(e);
    }
  return (
    <div>
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e)=>HandleOnChange(e.target.value)} type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id="book-time">
                                <option value={times} onChange={(e)=>setTimes(e.target.value)}>Select a time</option>
                                {
                                    props.avaliableTimes.avaliableTimes.map(avaliableTime =>{
                                        return <option key={avaliableTime}>{avaliableTime}</option> 
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guest'>Number Of Guests:</label>
                            <input id='book-guest'  min='1' value={guests} onChange={(e)=>{setGuests(e.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>  Occasion: </label>
                                <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>{setOccasion(e.target.nodeValue)}}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Family Gathering</option>
                                </select>
                        </div>
                        <div className='book-place'>
                            <label htmlFor='book-place'>
                                <input type="radio" value='indoor' onChange={(e)=>{setPlace(e.target.value)}} checked={place==='indoor'}/>
                                 Indoor
                            </label>
                            <label htmlFor='book-place'>
                                <input type="radio" value='outdoor' onChange={(e)=>{setPlace(e.target.value)}} checked={place==='outdoor'}/>
                                Outdoor
                            </label>
                        </div>
                        <div className='btn-receive'>
                            <input aria-label='On Click' type='submit' vlaue={'Make Your Reservation'} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    </div>
  )
}

export default BookingForm