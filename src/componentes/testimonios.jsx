 import "../estilos/TestimoniosEstilos.css"

 export const Testimonios = (props) => {
   
    return (
        
     <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../imagenes/testimonios-${props.imagen}.jpg`)} alt="" />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.name}</p>
            <p className='cargo-testimonio'>{props.titulo}</p>
            <p className='texto-testimonio'>{props.texto}</p>
        </div>
     </div>
   )
 }
 