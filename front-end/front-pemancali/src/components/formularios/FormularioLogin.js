import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { URL_HEROKU } from '../../server components/urls'



const FormularioLogin = () => {
    const cookies = new Cookies()
    const [correo,setCorreo]=useState('')
    const [contraseña,setContraseña]=useState('')

    const data={       
        correo_usuario:correo,       
        contraseña_usuario:contraseña
    }

    const submit = async e =>{
        e.preventDefault();       
        console.log(JSON.stringify(data))
            const body =data

            await fetch(URL_HEROKU+"api/signIn",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
                
                  }).then(resp => resp.json()).then(data => {   
                    console.log(data.data)
                    let respuesta=data.data
                    setCorreo('')
                    setContraseña('')                    

                    //cookies
                   /*  cookies.set('id',respuesta[0],{ path: '/' })
                    cookies.set('nombre',respuesta[1],{ path: '/' })
                    cookies.set('apellido',respuesta[2],{ path: '/' })
                    cookies.set('correo',respuesta[3],{ path: '/' })
                    window.location = '/user'; */
                
                })            

    }





    return (
        <>
            <div className="container">
                <div  className="row">
                    <div  className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div  className="card my-5">
                            <div  className="card-body">
                                <h5  className="card-title text-center text-uppercase mb-5">Iniciar sesión</h5>
                                <form  onSubmit={submit}>
                                    <div  >
                                        <label htmlFor="inputEmail " className='font-weight-bold float-left'>Correo Electronico <i className='bi bi-envelope' style={{fontSize:'20px'}}/></label>
                                        <input type="email" id="inputEmail"  className="form-control " placeholder="Correo electrónico" required autoFocus 
                                        value={correo}  onChange={e=>setCorreo(e.target.value)} />
                                            
                                    </div>

                                        <div >
                                            <label htmlFor="inputPassword " className='font-weight-bold float-left '>Contraseña <i className='bi bi-key' style={{fontSize:'20px'}}/></label>
                                            <input type="password" id="inputPassword"  className="form-control" placeholder="Contraseña" required
                                            value={contraseña}  onChange={e=>setContraseña(e.target.value)} />
                                                
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
