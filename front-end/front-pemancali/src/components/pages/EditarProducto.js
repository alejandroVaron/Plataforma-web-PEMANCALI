import React,{useState,useEffect} from 'react'
import Footer from '../footer/Footer'
import { useFetch } from '../useFetch'
import { URL_HEROKU } from '../../server components/urls'
import { useParams } from 'react-router'
import Cookies from 'universal-cookie/es6'
import Swal from 'sweetalert2'


const EditarProducto= () => {
    const cookies = new Cookies();    

    const [nombreProducto,setNombreProducto]=useState(cookies.get('producto').nombre_producto)
    const [descripcion,setDescripcion]=useState(cookies.get('producto').descripcion_producto)
    const [url,setUrl]=useState(cookies.get('producto').url_img)
    const [precio,setPrecio]=useState(cookies.get('producto').precio_producto)

    const [categoria,setCategoria]=useState(cookies.get('producto').id_categoria)

    const categorias = useFetch(URL_HEROKU+'category') 
    const {loading , data }=categorias  
    
    const infoProducto = useFetch(URL_HEROKU+'product/id='+useParams().id) 
   
    async function editar(e){  
        e.preventDefault();
            const data={
                nombre_producto:nombreProducto,
                descripcion_producto:descripcion,
                url_img:url,
                precio_producto:precio,
                id_categoria:categoria
            }
            try {
                const body =data
                const response=await fetch(URL_HEROKU+"product/id="+cookies.get('producto').id_producto,{
                    method: "PUT",
                    headers: { "Content-Type": "application/json",
                                "Authorization": "token "+cookies.get('token') },
                    body: JSON.stringify(body)
                })
                if(response.status==200){
                    Swal.fire({
                        icon: 'success',                        
                        text: 'Elproducto fue creditado con exito',
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
        <div className='container editar-producto mt-5'>
        <h2 className='text-center text-uppercase'>Editar Producto</h2>
        <form  >
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
                        <select className="custom-select" id="inputGroupSelect01" id="inputCategoria"className="form-control" onChange={e=>setCategoria(e.target.value)} value={categoria}>
                            
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
                    
                    <button className="btn btn-warning ml-3" id='btn-crear'  onClick={editar}>Editar</button>
                </form>
            </div>
            
            <Footer/>
            
            
        </>
    )
}

export default EditarProducto