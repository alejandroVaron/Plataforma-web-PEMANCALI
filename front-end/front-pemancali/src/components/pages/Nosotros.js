import React from 'react'
import NosotrosItem from '../cards/NosotrosItem'
import Footer from '../footer/Footer'

const Nosotros = () => {
    return (
        <>
        <div className='container nosotros main'>
            <h1 >Sobre Nosotros</h1>   
            <div className='container row justify-content-center'>
                
                <div className='row'>
                    <div className='col  my-2'>
                <NosotrosItem 
                url='./images/mision.png'
                alt='imagen logo'
                titulo='Misión'
                descripcion=' Ofrecer productos deportivos y  de acondicionamiento físico de fabricación caleña  a todas las personas a nivel regional. '
                tamaño='100%'
                />
                </div>
                <div className='col  my-2'>
                <NosotrosItem 
                url='./images/vision.png'
                alt='imagen logo'
                titulo='Visión'
                descripcion='Ser una tienda deportiva de renombre con todos los productos deportivos disponibles a nivel regional.'
                tamaño='100%'
                /> 
                </div>
                </div>
                
                <NosotrosItem 
                url='./images/logo.png'
                alt='imagen logo'
                titulo='Historia'
                descripcion='Durante los inicios de la pandemia covid 19 un grupo de jóvenes se percataron de la necesidad  de muchas personas en la ciudad de cali, de acceder a equipo para realizar ejercicio en casa,  teniendo en cuenta que la ciudad de cali es una ciudad con un alto número de deportistas decidieron ofrecer alternativas económicas para ellos y personas amantes al fitness y crossfit, brindando productos como pesas fabricadas en concreto y hierro, barras multifuncionales, bancas de elevación, fabricadas en talleres o cerrajerias, chalecos y tobilleras de peso, productos en su gran mayoría de fabricación caleña. 
                Durante los meses venideros  fueron posicionándose con estos productos hasta ofrecer una amplia variedad de estos, ahora los emprendedores  piensan  ofrecer productos deportivos para una comunidad caleña que está volviendo a la normalidad después de la crisis de la pandemia.
                '
                tamaño='100%'
                />  
            </div>   

           

        </div>
        <Footer/>

        </>
    )
}

export default Nosotros
