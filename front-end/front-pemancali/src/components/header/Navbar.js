import React from 'react'

import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie/es6'

const Navbar = () => {
    const cookies = new Cookies();
    var inicio_sesion=''
    var correo_user=''
    if(cookies.get('correo')){
        inicio_sesion='Cerrar Sesión'
        correo_user=cookies.get('correo')
    }else{
        inicio_sesion='Iniciar Sesión'
        correo_user=''
    }

    function btnSesion(){
        if(inicio_sesion==='Cerrar Sesión'){
            cookies.remove('id',{ path: '/' })
            cookies.remove('nombre',{ path: '/' })
            cookies.remove('apellido',{ path: '/' })
            cookies.remove('correo',{ path: '/' })
            cookies.remove('celular',{ path: '/' })
            window.location = '/login';
        }else{
            window.location = '/login';
        }
    }
    function btnUser(){
        if(correo_user===''){           
            window.location = '/registro';
        }else{
            if(cookies.get('rol')==0){
                window.location = '/admin';
            }
            if(cookies.get('rol')==2){
            window.location = '/cliente';
            }
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:'black'}}>
                <a className="navbar-brand mb-0 h1 mr-auto mx-5" href="/">
                    <img src="./images/logo.png" alt="logo" height="50" className='imagen-logo '/>                 
                </a> 
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
                                <a href='#' className="nav-link " style={{textDecoration:'underline'}} onClick={btnUser} >
                                    {correo_user}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='#' className="nav-link " style={{textDecoration:'underline'}} onClick={btnSesion} >
                                    {inicio_sesion}
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/' >
                                     <i className="bi bi-cart"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>

        </div>
    )
}

export default Navbar
