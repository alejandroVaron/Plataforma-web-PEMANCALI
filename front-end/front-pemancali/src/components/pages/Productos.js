import React,{useState} from 'react'
import { useFetch } from '../useFetch'
import { URL_HEROKU } from '../../server components/urls'
import Producto from '../cards/Producto'
import Footer from '../footer/Footer'

const Productos = () => {
    const [categoria,setCategoria]=useState('')

    const categorias = useFetch(URL_HEROKU+'category') 
    const {loading , data }=categorias
    
    const productos = useFetch(URL_HEROKU+'product'+categoria) 
    const loadingProductos=productos.loading
    const dataProductos=productos.data    

    function filtro(valor){
        if(valor=="0"){
            setCategoria('')
        }else{
            setCategoria('/category='+valor)
        }
    }
    

    return (
        <>
        <div className='productosPage main'>
            <h1>Nuestos Productos</h1>

            <div className="input-group px-5 ">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Categoría</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01"  onChange={e=>filtro(e.target.value)}>
                    <option selected value="0">Todos las categorías...</option>
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
            <div className='container-cards mt-5'>                
                <ul className='cards'>
                   {
                        loadingProductos
                        ?
                        <div className="spinner-border text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                            {console.log('cargando')}
                        </div>
                        
                        : 
                         dataProductos.length>0
                         ? 
                         dataProductos.map(e=>(  
                           <li className='cards-item' key={e.id_producto}>
                            <Producto 
                            codigo={e.id_producto}
                            url={e.url_img}                        
                            nombreProducto={e.nombre_producto}
                            precio={e.precio_producto}
                            descripcion={e.descripcion_producto}

                            />
                        </li>
                        )) 
                        :
                        <div className="alert alert-dark" role="alert">
                             Por el momento no hay productos para esta categoría
                        </div>                        

                    }

                </ul>
             </div>
             


             </div>

             <Footer/>


            

        </>
    )
}

export default Productos
