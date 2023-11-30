const Item = ({id, nombre, img, price, stock})=>{
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
                     Precio : {price}
                    </p>
                    
                     <p className="info">
                      Stock disponible: {stock}
                    </p>
            </section>
         <footer className="ItemFooter">
            <Link to = { `item/${id}`} className='Option'>Ver detalle...</Link>
         </footer>
        </article>
    )
}
export default Item