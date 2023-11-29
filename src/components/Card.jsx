import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, 
    handleAgregar, handlerQuitar, handlerAumentar, handlerDisminuir}) => {

    const [added, setAdded] = useState(false)
    const quitarCarrito = () => {
        handlerQuitar()
        setAdded(false)
    }
    const agregarCarrito = () => {
        handleAgregar()
        setAdded(true)
    }
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {added
                    ? <button type="button" className="boton-quitar" onClick={quitarCarrito }>Quitar del Carrito</button>
                    : <button type="button" className="boton-agregar" onClick={agregarCarrito }>Agregar del Carrito</button>
                }
            </div>
        </div>

    )
}
