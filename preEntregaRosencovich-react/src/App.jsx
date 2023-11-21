
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemCount from './components/itemCount/itemCount.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx'

function App() {
  

 /*  return (

    <>
   <Navbar/>
   <ItemListContainer saludo="Bienvenid@ a la página oficial de Lamed Uniformes"/>
   <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
    </>
  ) */

  return(
<div className='App'>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<itemListContainer/>}/>
    <Route path='item/:itemId' element = {<ItemDetailContainer/>}/>
    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>p
    </Routes>
    </BrowserRouter>
</div>

  );
}

export default App
