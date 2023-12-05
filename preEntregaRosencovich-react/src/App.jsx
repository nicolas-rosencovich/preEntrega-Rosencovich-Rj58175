import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from '../src/components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          {/* <Route path={`item/${id}`} element={<ItemDetailContainer />} /> */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
