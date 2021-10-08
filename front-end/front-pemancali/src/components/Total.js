import React from 'react'
import './Total.css';
import { getBasketTotal } from '../reducer';
import NumberFormat from 'react-number-format'
import {useStateValue } from '../StateProvider'
import Checkout from './CheckoutForm/Checkout';
import {Link} from 'react-router-dom';

const Total = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div>
            <h5>Total items: {basket?.length}</h5>
            <p className="card-text">
                    <NumberFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'$'} />                       
            </p>
            <Link className="nav-link " to='/checkout' >
            <button href="/checkout" type="button" class="btn btn-secondary" >Check out</button>
            </Link>
        </div>
    )
}

export default Total
