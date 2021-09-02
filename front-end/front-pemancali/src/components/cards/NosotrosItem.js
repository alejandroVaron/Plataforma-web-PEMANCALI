import React from 'react'

const NosotrosItem = ({url,alt,titulo,descripcion,tamaño}) => {
    return (
       
            <div className="card mb-3 col-auto h-100 " style={{maxWidth: tamaño}}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center" >                      
                        <img className=" rounded " src={url} alt={alt} style={{maxWidth: '100%'}}/>                        
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-uppercase">{titulo}</h5>
                                <p className="card-text text-justify">{descripcion}</p>                                
                            </div>
                        </div>
                    </div>
                </div>

            
    )
}

export default NosotrosItem
