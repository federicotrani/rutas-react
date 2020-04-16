import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Persona = () => {

    // State
    const [persona, setPersona] = React.useState({});

    // console.log(useParams());
    const {id} = useParams();

    React.useEffect(() => {

        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const item = await data.json();
            
            // console.log(item);
    
            setPersona(item);
        } 
       obtenerDatos();
    }, [id])

    return (
        <div>
            {persona.name} - {persona.email}
            <p>teléfono: {persona.phone}</p>
            <p>web: {persona.website}</p>
        
            <Link to="/nosotros">Volver</Link>
        </div>
    )
}

export default Persona
