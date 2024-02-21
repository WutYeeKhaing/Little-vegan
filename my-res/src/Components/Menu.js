import React from 'react'
import recipes from '../Recipes.js'
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder= (id) =>{
        console.log(id,"id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "Ready for ordering?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered",
                text: "Your Order has been processing",
                icon: "success"
              });
            }
          });
    }
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>Weekly Specials!</h2>
            <button>Order Menu</button>
        </div>
        <div className='cards'>
            {
             recipes.map(recipe => <div  className="menu-items" key={recipe.id}>
                <img src={recipe.image} alt=""/>
                <div className='menu'>
                <div>
                    <h5>{recipe.title}</h5>
                    <h5>Price: {recipe.price} baht</h5>
                </div>
                <p className='des'>{recipe.description}</p>
                <button className='order-btn' onClick={()=>handleOrder(recipe.id)}>Order Now</button>
                </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default Menu