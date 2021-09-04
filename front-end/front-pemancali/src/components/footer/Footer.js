import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>            
            <footer className=' text-white py-4 ' style={{backgroundColor:'black'}}>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                        <img src="./images/logo.png" alt="logo" height="60" className='mr-2 imagen-logo'  /> 
                        </Link>                        

                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-uppercase mb-2'>Contáctanos</li>
                            <li> 
                                ###-###-##-##<i className="bi bi-whatsapp"/>
                            </li>
                            <li>
                                pemancali@correo.com <i className="bi bi-envelope"/>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-uppercase mb-2'>Síguenos</li>
                            <li >                                
                                <a href='https://www.facebook.com/pemancali' target="_blank" className='text-reset'>
                                    Facebook <i className='bi bi-facebook'/>  
                                </a>  
                            </li>
                            <li>                        
                                <a href='https://www.instagram.com/pemancali/?hl=es-la' target="_blank" className='text-reset'>
                                    Instagram <i className='bi bi-instagram'/>
                                </a>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-uppercase mb-2'>Metodos de pago</li>
                            <li className='d-flex justify-content-between'>
                                <img src='./images/visa.svg' width='50' alt='visa icono'/>
                                <img src='./images/paypal.svg' width='50' alt='paypal icono'/>
                                <img src='./images/tarjeta.svg' width='50'alt='mastercard icon'/>
                                
                            </li>
                        </ul>
                        <div className='container'>
                        <p className='text-uppercase text-center mb-0 mt-2' style={{fontSize:'12px'}} > todos los derechos reservados - desarrollado por bit-bang -awri</p>
                        </div>
                    </nav>
                    
                        
                    

                </div>
            </footer>
            
        </div>
    )
}

export default Footer
