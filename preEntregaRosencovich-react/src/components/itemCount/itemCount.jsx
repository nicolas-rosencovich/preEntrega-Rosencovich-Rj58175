import React from 'react'
import {useState} from 'react'
import estilos from '../itemCount/itemCount.module.css'


const itemCount = ({stock, initial, onAdd})=>{
    const[quantity, setQuantity]= useState(initial)

    //Variable del incremento
    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }
 
    //variable del decremento
    const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className={estilos.Counter}>
                <div className={estilos.Controls}>
                    <button className={estilos.Button} onClick={decrement}>-</button>
                        <h4 className={estilos.number}> {quantity}</h4>            
                    <button className={estilos.Button} onClick={increment}>+</button>
                </div>
                    <div>
                        <button className={estilos.Button} onClick={()=>onAdd(quantity)} disabled={!stock}>
                            {/*    wAgregar al carrito... */}
                        </button>

                    </div>
        </div>
       

    )
}

export default itemCount


