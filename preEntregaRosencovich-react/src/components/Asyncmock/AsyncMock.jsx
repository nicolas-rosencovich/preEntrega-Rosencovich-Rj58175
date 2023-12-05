const products = [

  {    id:'1',
    nombre:'Iphone 13',
    price:1000,
    category: 'celular',
    img:'LInK ACA',
    stock:25,
    description:'Descripcion de Iphone 13'
},

{
    id:'2',
    nombre:'Iphone 15 pro Max',
    price:1500,
    category: 'celular',
    img:'LInK ACA',
    stock:20,
    description:'Descripcion de Iphone 15 Pro Max'
},


{
    id:'3',
  nombre:'Samsung s23Ultra',
    price:1300,
    category: 'celular',
    img:'LInK ACA',
    stock:25,
    description:'Descripcion de s23Ultra'
},

]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
} 
    

export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}