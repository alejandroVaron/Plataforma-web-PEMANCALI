import React from 'react'
import NumberFormat from 'react-number-format'
import { actionsTypes } from '../../reducer'
import {useStateValue } from '../../StateProvider'
import Swal from 'sweetalert2'



const Producto = ({codigo,url,nombreProducto,precio}) => {


    const addToBasket = () => {
        dispatch({
            type: actionsTypes.ADD_TO_BASKET,
            item: {
                idProducto: codigo, 
                name: nombreProducto,
                image: url,
                price: precio,
                
            }
        })
        generateAlert();
    
    }

    const generateAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'El producto ha sido añadido correctamente',
            text: 'Continua con tu compra'                        
          })
    }


    const [{basket}, dispatch] = useStateValue();


    return (
        <>
        <div className="card" style={{width:'18rem', height:'20rem'}}>            
            <img src={url} className="card-img" alt="producto"/>            
            <div className="card-body">
                <h5 className="card-title">{nombreProducto}</h5>
                <p className="card-text"> 
                    <NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />                
                </p>
                <button type="button" className="btn btn-outline-dark" onClick={addToBasket}>Añadir al carrito <i className="bi bi-cart-plus"></i>  </button>
            </div>
        </div>
            
        </>
    )
}

export default Producto
