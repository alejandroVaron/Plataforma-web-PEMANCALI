import React from 'react'
import NumberFormat from 'react-number-format'
import {useStateValue } from '../StateProvider'
import { actionsTypes } from '../reducer'




const CheckoutCard = ({codigo,url,nombreProducto,precio}) => {
    const [{basket}, dispatch] = useStateValue();

const removeItem = () => dispatch({
    type: actionsTypes.REMOVE_ITEM,
    id: codigo,
})


    return (
        <>
        <div className="card" style={{width:'15rem', height:'17rem'}}>
            <img src={url} className="card-img" alt="producto"/>            
            <div className="card-body">
                <h5 className="card-title">{nombreProducto}</h5>
                <p className="card-text"> 
                    <NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />                
                </p>
                <div class="text-right">
                <button type="button" class="btn btn-danger" onClick={removeItem}> <i  class="bi bi-trash fa-lg" aria-hidden="true"></i></button>

                </div>
            </div>
        </div>
            
        </>
    )
}

export default CheckoutCard
