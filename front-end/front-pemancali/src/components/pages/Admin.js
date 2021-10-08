import React from 'react'

import Footer from '../footer/Footer'
import Cookies from 'universal-cookie/es6'
import { useFetch } from '../useFetch'
import { URL_HEROKU } from '../../server components/urls'
import Swal from 'sweetalert2'


const Admin = () => {
    const cookies = new Cookies();

    const productos = useFetch(URL_HEROKU+'product') 
    const {loading , data }=productos 

    const confirmar = (id,producto)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas seguro?',
            text: "Se eliminara el producto: "+producto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              eliminar(id)
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado'                
              )
            }
          })  
    }

    async function eliminar ( id){
        try {            
            const response=await fetch(URL_HEROKU+"product/id="+id,{
                method: "DELETE",
                headers: { "Content-Type": "application/json",
                            "Authorization": "token "+cookies.get('token') },                
            })
            if(response.status==200){
                Swal.fire({
                    icon: 'success',                        
                    text: 'Elproducto fue eliminado',
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
            <div className='container mt-5 admin'>
                <h2 className='text-uppercase text-left'>Bienvenido {cookies.get('nombre')}</h2>
                <button type="button" className='btn btn-success mb-3 ' onClick={e=>{window.location='/crear'}}>
                    Crear producto <i className='bi bi-plus-square' style={{fontSize:'20px'}} />               
                    </button>
                
                
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Editar/Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             loading
                             ?
                             <div className="spinner-border text-dark" role="status">
                                 <span className="sr-only">Loading...</span>
                                 {console.log('cargando')}
                             </div>
                             :
                             data.map(e=>(
                                 <tr key={e.id_producto}>
                                     <th scope="row">{e.id_producto}</th>
                                    <td><img src={e.url_img} className='img-product'/></td>
                                    <td>{e.nombre_producto}</td> 
                                    <td>
                                        <button className='btn btn-warning mr-3'>
                                            <i className='bi bi-pencil' style={{fontSize:'12px'}}/>
                                        </button>

                                        <button className='btn btn-danger' onClick={fn=>{confirmar(e.id_producto,e.nombre_producto)}}>
                                            <i className='bi bi-trash' style={{fontSize:'12px'}}/>
                                        </button>
                                        
                                        </td>                                    
                                </tr>                                                       
                            ))
                        }
                    
                    </tbody>
                </table>

        </div>
                      
            <Footer/>
            
            
        </>
    )
}

export default Admin