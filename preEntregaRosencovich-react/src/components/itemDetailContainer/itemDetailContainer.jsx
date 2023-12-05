import{ useState, useEffect} from 'react'
/* import{getProductById} from '../../AsyncMock.jsx' */
import {getProductById} from '../Asyncmock/AsyncMock.jsx' 
import ItemDetail from '../itemDetail/itemDetail.jsx'


const ItemDetailContainer = ()=>{
    const[product, setProduct]=useState(null)

    useEffect(()=>{
        getProductById(itemId)
         .then(response=>{
            setProduct(response)
        })
         .catch(error=>{
            console.error(error)
        })
    },[itemId])
    

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )


}

export default ItemDetailContainer