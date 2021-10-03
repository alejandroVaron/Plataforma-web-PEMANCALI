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
                            url={e.url_img}                        
                            nombreProducto={e.nombre_producto}
                            precio={e.precio_producto}
                            descripcion={e.descripcion_producto}

                            />
                        </li>                        
                        ))                       
                        
                        

                    }

                    {/* <li className='cards-item'>
                        <Producto 
                        url='./images/22.jpg'                        
                        nombreProducto='Zapatillas Nike'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/23.jpg'                       
                        nombreProducto='Chaleco peso'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/24.jpg'                        
                        nombreProducto='Pesas'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/25.jpg'                        
                        nombreProducto='Balon UEFA Champions League'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/26.jpg'                        
                        nombreProducto='Bandas elasticas'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/27.jpg'                        
                        nombreProducto='Agarre elastico'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/28.jpg'                        
                        nombreProducto='Tapa-Bocas'
                        precio='50000'

                        />
                    </li>
                    <li className='cards-item'>
                        <Producto 
                        url='./images/29.jpg'                        
                        nombreProducto='Bebida hidratante'
                        precio='50000'

                        />
                    </li> */}
                </ul>
            </div>
            
        </>
    )
}

export default Cards
