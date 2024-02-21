import React from 'react'
import {Link} from 'react-router-dom';
import bannerImg from '../Images/food.png'

const Header = () => {
  return (
    <header >
        <section>
            <div className='banner'>
                <h2>Little Vegan</h2>
                <h3>Thailand</h3>
                <p>For who want to adventurous on Vegan Foods.Own Recepie and Delicious and Luxury.</p>
               <Link to="/booking"> <button aria-label="on Click">Reserve Table</button></Link>
            </div>
            <div className='banner-img'>
                <img src={bannerImg} alt=""/>
            </div>
        </section>
    </header>
  )
}

export default Header;