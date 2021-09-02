import React from 'react'
import { Link } from 'react-router-dom'



const FormularioLogin = () => {
    return (
        <>
            <div className="container">
                <div  className="row">
                    <div  className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div  className="card my-5">
                            <div  className="card-body">
                                <h5  className="card-title text-center text-uppercase mb-5">Iniciar sesión</h5>
                                <form >
                                    <div  >
                                        <label htmlFor="inputEmail " className='font-weight-bold float-left'>Correo Electronico <i className='bi bi-envelope' style={{fontSize:'20px'}}/></label>
                                        <input type="email" id="inputEmail"  className="form-control " placeholder="Correo electrónico" required autoFocus />
                                            
                                    </div>

                                        <div >
                                            <label htmlFor="inputPassword " className='font-weight-bold float-left '>Contraseña <i className='bi bi-key' style={{fontSize:'20px'}}/></label>
                                            <input type="password" id="inputPassword"  className="form-control" placeholder="Contraseña" required />
                                                
                                        </div>   

                                        <button  className="btn btn-lg btn-outline-dark btn-block mt-3 " type="submit">Iniciar sesión</button>
                                        <hr  className="my-4"/>                                                    
                                        <button  className="btn btn-lg  btn-block " type="submit" style={{backgroundColor:'#3b5998', color:'white'}}><i className='bi bi-facebook'/> Iniciar sesión con Facebook</button>

                                        <label className='text-center mt-5 '>
                                            ¿Aun no estas registrado?  
                                            <Link to='/registro' className='ml-2'>Regístrate aquí</Link>
                                         </label>
                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
            
        </>
    )
}

export default FormularioLogin
