import React from 'react'
import Producto from './Producto'
import './Cards.css'
import {useFetch } from '../useFetch'
import { URL_HEROKU } from '../../server components/urls'

const Cards = () => {
    const productos = useFetch(URL_HEROKU+'product') 
    const {loading , data }=productos      

    return (
        <>
            <div className='container-cards'>
                <h1>Nuestros Productos</h1>
                <ul className='cards'>
                   {
                        loading
                        ?
                        <div className="spinner-border text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                            {console.log('cargando')}
                        </div>
                        
                        :                        
                        data.slice(0,8).map(e=>(
                            <li className='cards-item' key={e.id_producto}>                        
                            <Producto 
                            codigo={e.id_producto}
                            url={e.url_img}                        
                            nombreProducto={e.nombre_producto}
                            precio={e.precio_producto}


                            />
                        </li>  
                        
                        
                        ))                       
                        
                        

                    }
                </ul>
            </div>
            
        </>
    )
}

export default Cards
