import React from 'react'



const FormularioContacto = () => {
    return (
        <>
        <div className="container">
                <div  className="row">
                    <div  className="col-sm-9 col-md-7 mx-auto">
                        <div  className="card my-5">
                            <div  className="card-body">
                                <h5  className="card-title text-center text-uppercase mb-5">Contáctanos</h5>
                                <form  >
                                    <div  className=" mt-3 ">
                                        <label htmlFor="inputNombre " className='font-weight-bold float-left'>Nombre completo <i className='bi bi-person ' style={{fontSize:'20px'}}/></label>
                                        <input type="text" id="inputNombre"  className="form-control " placeholder="Nombre completo " required autoFocus />
                                            
                                    </div>
                                    <div  className=" mt-3">
                                        <label htmlFor="inputCelular" className='font-weight-bold float-left'>Celular <i className='bi bi-phone' style={{fontSize:'20px'}}/></label>
                                        <input type="text" id="inputCelular"  className="form-control " placeholder="Celular" required autoFocus />
                                            
                                    </div>
                                    <div  className=" mt-3">
                                        <label htmlFor="inputEmail " className='font-weight-bold float-left '>Correo Electronico <i className='bi bi-envelope' style={{fontSize:'20px'}}/></label>
                                        <input type="email" id="inputEmail"  className="form-control " placeholder="Correo electrónico" required autoFocus />
                                            
                                    </div>

                                        <div  className=" mt-3">
                                            <label htmlFor="inputPassword " className='font-weight-bold float-left'>Mensaje <i className='bi bi-pencil-square' style={{fontSize:'20px'}}/></label>
                                            <textarea className='form-control' placeholder='Mensaje' rows="7"/>
                                        </div>   

                                        <button  className="btn btn-lg btn-outline-dark btn-block mt-3 " type="submit">Enviar</button>                                      

                                        
                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

        
            
        </>
    )
}

export default FormularioContacto
