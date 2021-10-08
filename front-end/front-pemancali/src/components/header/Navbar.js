import React from 'react'
import { Badge } from '@mui/material';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {useStateValue } from '../../StateProvider'

const Navbar = () => {
    const [{basket}, dispatch] = useStateValue();    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:'black'}}>
                <a className="navbar-brand mb-0 h1 mr-auto mx-5" href="/">
                    <img src="./images/logo.png" alt="logo" height="50" className='imagen-logo '/>                 
                </a> 
                <div className="grow" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to='/'>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/nosotros'>
                                    Nosotros
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/productos'>
                                    Productos
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className='nav-link' to='/contacto'>
                                    Contáctanos
                                </Link>                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/login' style={{textDecoration:'underline'}}  >
                                    Iniciar sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/checkout-page' >
                                <Badge badgeContent={basket?.length} color="error">
                                     <i className="bi bi-cart"/>
                                </Badge>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>

        </div>
    )
}

export default Navbar
