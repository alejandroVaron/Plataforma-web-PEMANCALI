import React from 'react'
import NumberFormat from 'react-number-format'

const Producto = ({url,nombreProducto,precio}) => {
    return (
        <>
        <div className="card" style={{width:'18rem', height:'20rem'}}>
            <img src={url} className="card-img" alt="producto"/>            
            <div className="card-body">
                <h5 className="card-title">{nombreProducto}</h5>
                <p className="card-text"> 
                    <NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />                
                </p>
                <a href="/" className="btn btn-outline-dark">Añadir al carrito <i className="bi bi-cart-plus"></i> </a>
            </div>
        </div>
            
        </>
    )
}

export default Producto
