import React, { useReducer } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'
import ConfirmdBooking from './ConfirmdBooking'
const Main = () => {
    const Random = function(res){
        var m = 2**35 -31;
        var a = 185852;
        var s= res % m;
        return function(){
            return( s = s *a % m)/m;
        }
    }
    const fetchAPI = function(date){
        let result= [];
        let random = Random(date.getDate());
        for(let i = 17 ; i <= 23 ; i++){
          if(random() <0.5){
            result.push(i+':00');
          }
          if(random() >0.5){
            result.push(i+':30')
          }
        }
        return result;
    }
    const submitAPI = function(formData){
        return true;
    }
    const initialState = {avaliableTimes : fetchAPI(new Date())}
    const[state,dispatch] =useReducer(reducer,initialState);
     
    function reducer(state,date){
        return {avaliableTimes: fetchAPI(new Date(date))}
    }
    const navigate= useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }
  return (
    <main>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/booking' element={<Booking avaliableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path='/confirmed' element={<ConfirmdBooking/>}/>
      </Routes>
    </main>
  )
}

export default Main;