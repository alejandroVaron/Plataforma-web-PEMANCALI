import React from 'react'

import './Jumbo.css'
import {Link} from 'react-router-dom'

const Jumbo = () => {
    return (
        <div>
            <div className="jumbotron" >                                          
                <img className='imagen-logo 'src='./images/logo.png' width='70%' alt='logo'/>   
                <hr/> 
                <h2> !Una alternativa diferente a las grandes marcas!</h2>
                <Link className="btn btn-outline-light btn-lg" to='/productos' role="button">Productos</Link>
                <Link className="btn btn-light btn-lg ml-2" to='/registro' role="button">Regístrate</Link>
            </div>

        </div>

    )
}

export default Jumbo
