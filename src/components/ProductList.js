import React from 'react';
import list from '../data';
import '../styles/ProductList.css';
import MealSummary from './MealSummary';

const ProductList = ({handleClick}) => {
  return (
    <div>
       
         <div className='main-image'>
      <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' alt='The table is full '></img>
     
    </div>
    <main>
    <MealSummary></MealSummary>
    </main>
    
    <section>
       
        {
            list.map((item)=>(
             <div  key={item.id}> 
              <div className="cards">
              <div className="image_box">
             
                  <img src={item.img} alt=' ' />
              </div>
              <div className="details">
                  <p>{item.title}</p>
                  <p>Price - {item.price}Rs</p>
                  <button onClick={()=>handleClick(item)} >Add to Cart</button>
              </div>
          </div>
          </div>
            ))
        }
    </section>
    </div>
  )
}

export default ProductList;