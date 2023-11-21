/* Hacemos la importación del css y también la del item */

const ItemList= ({products})=>{
    return(
        <div className="ListGroup">
            {products.map(prod=> <Item key= {prod.id} {...id} />)}
        </div>
    )
} 

export default ItemList