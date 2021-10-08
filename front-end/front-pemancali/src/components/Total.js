import React from 'react'
import './Total.css';
import { getBasketTotal } from '../reducer';
import NumberFormat from 'react-number-format'
import {useStateValue } from '../StateProvider'
import Checkout from './CheckoutForm/Checkout';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie/es6'
import { URL_HEROKU } from '../server components/urls';
import Swal from 'sweetalert2';

const Total = () => {
    const cookies = new Cookies();
    const [{basket}, dispatch] = useStateValue();
        array.length = 0;
        }







    async function comprar (){
        if(!cookies.get('id')){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes iniciar sesión'                        
              })
           return

        }
        let id_usuario=cookies.get('id')

        try{
        for (let i =0;i<basket.length;i++){
            let data ={
                id_usuario,
                id_producto:basket[i].idProducto,
                cantidad:1,
                valor_total:basket[i].price
            }
            
                const body=data 

                const response=await fetch(URL_HEROKU+"order",{
                    method: "POST",
                    headers: { "Content-Type": "application/json",
                                 "Authorization": "token "+cookies.get('token')  },
                    body: JSON.stringify(body)
                })
                if(response.status==200){                    
                    console.log('Comprado')
                }
            }
          

            {emptyBasket(basket)};
            }catch(error){
                console.log(error)
            }

        

        }
        
        
    



    return (
        <div>
            <h5>Total items: {basket?.length}</h5>
            <p className="card-text">
                    <NumberFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'$'} />                       
            </p>
            <Link  to='/review' >
            <button type="button" class="btn btn-secondary"  onClick={comprar}> Comprar</button>
            </Link>
        </div>
    )
}

export default Total
