import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const FormularioRegistro = () => {
    //Estados
    const [nombre,setNombre]=useState('')
    const [apellido,setApellido]=useState('')
    const [celular,setCelular]=useState('')
    const [correo,setCorreo]=useState('')
    const [contraseña,setContraseña]=useState('')
    const [confirmarContraseña,setConfirmarContraseña]=useState('')

    const data={
        nombre_usuario:nombre,
        apellido_usuario:apellido,
        celular_usuario:celular,
        email_usuario:correo,
        rol_usuario:2,
        contraseña_usuario:contraseña
    }

    const submit = async e =>{
        e.preventDefault();
        if(contraseña===confirmarContraseña){
        try {
            const body =data
            const response=await fetch("https://pemancalidb.herokuapp.com/user",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            if(response.status==200){
                alert('El usuario fue registrado con exito')
                setNombre('')
                setApellido('')
                setCelular('')
                setCorreo('')
                setContraseña('')
                setConfirmarContraseña('')
                window.location = '/login';
            }
        } catch (error) {
            console.log(error)
        }
    }else{
        alert('Las Contraseñas no coinciden, vuelve a intentar!')
    }

    }


    return (
        <>
        <div className="container">
                <div  className="row">
                    <div  className="col-sm-9 col-md-7  mx-auto">
                        <div  className="card  my-5">
                            <div  className="card-body">
                                <h5  className="card-title text-center text-uppercase mb-5">Regístrate</h5>
                                <form  onSubmit={submit}>
                                <div className=" mt-3 ">
                                    <label htmlFor="inputName " className='font-weight-bold float-left'>Nombre <i className='bi bi-person' style={{fontSize:'20px'}}/></label>
                                    <input type="text" id="inputName"  className="form-control " placeholder="Nombre" required autoFocus value={nombre} 
                                    onChange={e=>setNombre(e.target.value)} /> 
                                    <label htmlFor="inputApellido" className='font-weight-bold float-left'>Apellido <i className='bi bi-person' style={{fontSize:'20px'}}/></label>   
                                    <input type="text" id="inputApellido"  className="form-control " placeholder="Apellido" required autoFocus value={apellido}
                                    onChange={e=>setApellido(e.target.value)} />
                                        
                                    </div>
                                    <div className=" mt-3 " >
                                        <label htmlFor="inputCelular " className='font-weight-bold float-left'>Celular <i className='bi bi-phone' style={{fontSize:'20px'}}/></label>
                                        <input type="text" id="inputCelular"  className="form-control " placeholder="Celular" required autoFocus value={celular}
                                        onChange={e=>setCelular(e.target.value)} />
                                            
                                    </div>
                                    <div className=" mt-3 " >
                                        <label htmlFor="inputEmail " className='font-weight-bold float-left'>Correo Electronico <i className='bi bi-envelope' style={{fontSize:'20px'}}/></label>
                                        <input type="email" id="inputEmail"  className="form-control " placeholder="Correo electrónico" required autoFocus  value={correo}
                                        onChange={e=>setCorreo(e.target.value)} />
                                            
                                    </div>

                                        <div className=" mt-3 " >
                                            <label htmlFor="inputPassword " className='font-weight-bold float-left'>Contraseña <i className='bi bi-key' style={{fontSize:'20px'}}/></label>
                                            <input type="password" id="inputPassword"  className="form-control" placeholder="Contraseña" required value={contraseña}
                                            onChange={e=>setContraseña(e.target.value)} />
                                            <label htmlFor="inputPasswordConfirm " className='font-weight-bold float-left'>Confirmar contraseña <i className='bi bi-key' style={{fontSize:'20px'}}/></label>
                                            <input type="password" id="inputPasswordConfirm "  className="form-control" placeholder="Cconfirmar contraseña" required value={confirmarContraseña} 
                                            onChange={e=>setConfirmarContraseña(e.target.value)}/>
                                            
                                        </div>   
                                        {/*<!-- Submit button -->*/}
                                        <button  className="btn btn-lg btn-outline-dark btn-block mt-3 " type="submit">Crear cuenta</button>
                                        <hr  className="my-4"/>                                                    
                                        <button  className="btn btn-lg  btn-block " type="submit" style={{backgroundColor:'#3b5998', color:'white'}}><i className='bi bi-facebook'/> Regístrate con Facebook</button>

                                        <label className='text-center mt-5 '>
                                            ¿Ya estas registrado?  
                                            <Link to='/login' className='ml-2'>Inicia sesión aquí</Link>
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

export default FormularioRegistro
