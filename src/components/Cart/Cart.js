import React from 'react'
import Navbar from '../Header/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Products/Products'

export default function Cart() {
    const cartProducts = useSelector(state => state.Cart.cartProducts);
    const dispatch = useDispatch();
    return (
        <>
            <Navbar />
            {
                cartProducts.map((item, index) => {
                    return <Product item={item} key={index} cart={'cart'} />
                })
            }




        </>
    )
}
