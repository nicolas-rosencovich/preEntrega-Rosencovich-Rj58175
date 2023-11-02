import estilos from '../ItemListContainer/itemListContainer.module.css'

 function ItemListContainer({saludo}) {
  return (   
   
 <div>
  <h2 className={estilos.saludoPrincipal}>{saludo}</h2>
 </div> 


  )
}

export default ItemListContainer
