
import React, { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart';
import '../src/styles/Header.css'

export default function App() { 
	
	const[item,setItem]=useState([]);
	const[showCart,setShowCart]=useState(false);
	const [warning, setWarning] = useState(false);
	
	function handleCart(value){
    setShowCart(value);
	}
	
	
	const handleClick = (items)=>{
		let isPresent = false;
		item.forEach((product)=>{
			if (items.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 5000);
			return ;
		}
		setItem([...item, items]);
	}

	const handleChange = (items, d) =>{
	    let ind = -1;
		item.forEach((data, index)=>{
			//console.log(data);
			if (data.id === items.id)
				ind = index;
			});
		const tempArr = item;
		tempArr[ind].amount += d;
		console.log(tempArr[ind]);
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setItem([...tempArr]);
	}

  return (
	<React.Fragment>
<Header count={item.length} handleCart={handleCart}></Header>

{
  showCart? <Cart cart={item} setCart={setItem} handleChange={handleChange}></Cart>:
  <ProductList handleClick={handleClick}></ProductList>
}
{
  warning && <div className='warning'>Item is already added to your cart</div>
}
   </React.Fragment>
  )
}
