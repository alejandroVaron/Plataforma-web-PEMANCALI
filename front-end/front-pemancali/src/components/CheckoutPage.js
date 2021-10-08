import React from "react";
import { Typography } from "@material-ui/core";
//import CheckoutCard from "./CheckoutCard";
import './CheckoutPage.css';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total"
import {useStateValue } from '../StateProvider'

const CheckoutPage = () => {
    const [{basket}, dispatch] = useStateValue();   
function FormRow() {
    return (
        <React.Fragment>
            <div className='container-cards'>
                <ul className='cards'>
                   {basket?.map((item) => (
                            <li className='cards-item' key={item.codigo}>
                            <CheckoutCard 
                            id={item.codgio}
                            url={item.image}                        
                            nombreProducto={item.name}
                            precio={item.price}

                            />
                        </li>                        
                        ))                       
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}


return (
    <div className="container">
        <div class="row">
            <div class="col">
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </div>
        </div>
        <div class="row">  
            <div class="col-lg-8">
            <FormRow/>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <Typography align='center' guttterBottom variant="h4">
                    <Total/>
                </Typography>
            </div>
        </div>
    </div>  
);
}

export default CheckoutPage;