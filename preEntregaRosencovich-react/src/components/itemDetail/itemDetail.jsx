import ItemCount from '../itemCount/itemCount'

const ItemDetail =({ id, nombre, img, category, description, price, stock})=>{
    return(
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>

        <picture>
            <img src={img} alt={nombre} className="ItemImg" />
        </picture>

        <section>
                 <p className="info">
              Categoría : {category}
                </p>
                
                 <p className="info">
                  Descripción: {description}
                </p>

                <p className="info">
                  Precio: $ {price}
                </p>
        </section>
     <footer className="ItemFooter">
        <ItemCount initial ={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada" + quantity + id )}/>


     </footer>
    </article>
    )
}

export default ItemDetail