import React,{useState} from 'react'
import Footer from '../footer/Footer'
import { useFetch } from '../useFetch'
import { URL_HEROKU } from '../../server components/urls'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie/es6'

const CrearProducto = () => {
    const cookies = new Cookies();

    if(cookies.get('rol')==2){
        window.location='/'
    }
    const [nombreProducto,setNombreProducto]=useState('')
    const [descripcion,setDescripcion]=useState('')
    const [url,setUrl]=useState('')
    const [precio,setPrecio]=useState('')

    const [categoria,setCategoria]=useState('')
    const categorias = useFetch(URL_HEROKU+'category') 
    const {loading , data }=categorias

    
    const datos={
        nombre_producto:nombreProducto,
        descripcion_producto:descripcion,
        url_img:url,
        precio_producto:precio,
        id_categoria:categoria
    }

    const crear= async e =>{
        e.preventDefault();        
        try {
            const body =datos
            const response=await fetch(URL_HEROKU+"product",{
                method: "POST",
                headers: { "Content-Type": "application/json",
                             "Authorization": "token "+cookies.get('token')  },
                body: JSON.stringify(body)
            })
            if(response.status==200){
                Swal.fire({
                    icon: 'success',                        
                    text: 'Elproducto fue creado con exito',
                    confirmButtonText:'Ok'                        
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/admin';
                    }})
                
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className='container crear-producto mt-5'>
                <h2 className='text-center text-uppercase'>Crear Producto</h2>
            

            <form  onSubmit={crear}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombreProducto">Nombre Producto</label>
                            <input type="text" className="form-control" id="inputNombreProducto" value={nombreProducto} 
                            onChange={e=>setNombreProducto(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputDescripcion">Descripcion</label>
                            <input type="text" className="form-control" id="inputDescripcion"  value={descripcion}
                            onChange={e=>setDescripcion(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputUrl">Url Imagen</label>
                            <input type="text" className="form-control" id="inputUrl"  value={url}
                            onChange={e=>setUrl(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPrecio">Precio</label>
                            <input type="number" className="form-control" id="inputPrecio"  value={precio}
                            onChange={e=>setPrecio(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCategoria">Categoria</label>
                        <select className="custom-select" id="inputGroupSelect01" id="inputCategoria"className="form-control" onChange={e=>setCategoria(e.target.value)}>
                            
                            {
                                loading
                                ?
                                console.log('cargando cateoria')
                                :
                                data.map(e=>(
                                    <option value={e.id_categoria}  key={e.id_categoria} >{e.nombre_categoria} </option>
                                ))
                            }
                   
                         </select>
                         </div>
                    </div>
                    
                    <button className="btn btn-success ml-3" id='btn-crear' >Crear</button>
                </form>
            </div>
            <Footer/>
            
            
        </>
    )
}

export default CrearProducto
