import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const itemsIn = useSelector((itemsIn)=> itemsIn.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className=" my-5 rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.Title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.Title}</h3>
                            <p className="lead fw-bold">{cartItem.Price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <h1>Please add something to cart!</h1>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {itemsIn.length === 0 && emptyCart()}
            {itemsIn.length !== 0 && itemsIn.map(cartItems)}
            {itemsIn.length !== 0 && button()}
        </>
    )
}

export default Cart
