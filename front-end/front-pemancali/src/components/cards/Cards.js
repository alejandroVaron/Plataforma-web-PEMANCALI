import React from 'react'
import Producto from './Producto'
import './Cards.css'

const Cards = () => {
    return (
        <>
            <div className='container-cards'>
                <h1>Nuestros Productos</h1>
                <ul className='cards'>
                    <li className='cards-item'>
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
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default Cards
