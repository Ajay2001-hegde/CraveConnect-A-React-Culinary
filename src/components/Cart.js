import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems  = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    const dispatch = useDispatch()
    const handleclearcart=()=>{
        dispatch(clearCart())

    }
  return (
    <div className="text-center p-4 m-4">
        <h1 className="text-2xl font-bold ">Cart </h1>
        <div className="w-6/12 mx-auto my-5">
            <button className='p-2 m-auto bg-black text-white rounded-md flex '
            onClick={
                handleclearcart
            }>Clear</button>
            {cartItems.length===0 &&<h1 className='font-bold m-auto p-2'>Oops!! Your cart is empty.</h1>}
        <ItemList items={cartItems}></ItemList>
        </div>
    </div>

  )
}

export default Cart