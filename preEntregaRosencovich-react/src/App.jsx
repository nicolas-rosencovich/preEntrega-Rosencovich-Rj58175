
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
/* import ItemCount from './components/itemCount/itemCount.jsx' */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx'

function App() {
  



  return(
<div className='App'>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='item/:itemId' element = {<ItemDetailContainer/>}/>
    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    </BrowserRouter>
</div>

  );
}

  
 


export default App
