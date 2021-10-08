import React ,{useState}from 'react'
import Footer from '../footer/Footer'
import Cookies from 'universal-cookie/es6'
import { URL_HEROKU } from '../../server components/urls'
import Swal from 'sweetalert2'

const Cliente = () => {
    const cookies = new Cookies();
    const [editar,setEditar]=useState('Editar datos')
    const [habilitar,setHabilitar]=useState(true)   
    
    const [nombre,setNombre]=useState(cookies.get('nombre')) 
    const [apellido,setApellido]=useState(cookies.get('apellido')) 
    const [celular,setCelular]=useState(cookies.get('celular')) 
    const [correo,setCorreo]=useState(cookies.get('correo')) 

    if(!cookies.get('correo')){
        window.location='/login'
    }

    async function editarDatos(e){
        e.preventDefault();
        if(editar==='Editar datos'){ 
            setHabilitar(false)
            setEditar('Guardar')
        }else{
            const data={
                nombre_usuario:nombre,
                apellido_usuario:apellido,
                celular_usuario:celular,
                email_usuario:correo,
            }
            try {
                const body =data
                const response=await fetch(URL_HEROKU+"user/id="+cookies.get('id'),{
                    method: "PUT",
                    headers: { "Content-Type": "application/json",
                                "Authorization": "token "+cookies.get('token') },
                    body: JSON.stringify(body)
                })
                if(response.status==200){
                    Swal.fire({
                        icon: 'success',                        
                        text: 'El usuario fue actualizado con exito'                        
                      })
                      
                    traerDatosNuevos()                 
                    setHabilitar(true)
                    setEditar('Editar datos') 

                }
            } catch (error) {
                console.log(error)
            }
        }

    }
    
    async function traerDatosNuevos(){
        try {
            
            const response=await fetch(URL_HEROKU+"user/id="+cookies.get('id'),{
                method: "GET",
                headers: { "Content-Type": "application/json",
                            "Authorization": "token "+cookies.get('token') },
                
            })
            if(response.status==200){
                response.json().then(res=>{
                    setNombre(res.nombre_usuario)
                    setApellido(res.apellido_usuario)
                    setCelular(res.celular_usuario)
                    setCorreo(res.email_usuario)
                })               

            }
        } catch (error) {
            console.log(error)
        }

    }

    function cancelar(e){
        e.preventDefault(); 
        traerDatosNuevos()      
        setHabilitar(true)
        setEditar('Editar datos')
    }

    



    return (
        <>
            <div className='container mt-5 cliente'>
                <h2 className='text-uppercase text-left'>Bienvenido {cookies.get('correo')}</h2>
                <form onSubmit={editarDatos}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" disabled={habilitar} value={nombre} 
                            onChange={e=>setNombre(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <input type="text" className="form-control" id="inputApellido" disabled={habilitar} value={apellido}
                            onChange={e=>setApellido(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCelular">Celular</label>
                            <input type="text" className="form-control" id="inputCelular" disabled={habilitar} value={celular}
                            onChange={e=>setCelular(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Correo electrónico</label>
                            <input type="email" className="form-control" id="inputEmail" disabled={habilitar} value={correo}
                            onChange={e=>setCorreo(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary" id='btn-editar'>{editar}</button>
                    <button className="btn btn-secondary ml-3" id='btn-editar' disabled={habilitar} onClick={cancelar}>Cancelar</button>
                </form>
            </div>
            <Footer/>
            
            
        </>
    )
}

export default Cliente