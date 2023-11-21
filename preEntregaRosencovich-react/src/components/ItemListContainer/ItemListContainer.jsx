import { useEffect, useState } from 'react'
 /* import{getProducts, getProductsByCategory} from '../src/asyncMock.jsx'  */
 import {getProducts, getProductsByCategory} from '../../AsyncMock.jsx'
import estilos from '../ItemListContainer/itemListContainer.module.css'
import ItemList from '../ItemList/itemList.jsx'

import{useParams} from 'react-router-dom'

 function ItemListContainer({saludo}) {
const[ products, setProducts]= useState([])

const {categoryId}= useParams()


useEffect(()=>{
  const asyncFunc = categoryId ? getProductsByCategory:getProducts

  asyncFunc(categoryId)
    .then(response=>{
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })

}, [categoryId])

/* useEffect(()=>{
  getProducts()
  .then(response=>{
    setProducts(response)
  })

  .catch(error => {
    console.error(error)
  })
}, []) */

  return (   
   
 <div>
  <h2 className={estilos.saludoPrincipal}>{saludo}</h2>
  <ItemList products= {products}/>
 </div> 


  )
}

export default ItemListContainer
