import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../Asyncmock/AsyncMock.jsx';
import estilos from '../ItemListContainer/itemListContainer.module.css';
import ItemList from '../cartWidget/ItemList/itemList.jsx';
import { useParams } from 'react-router-dom';

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categoryId) {
          const response = await getProductsByCategory(categoryId);
          setProducts(response);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
        // Podrías mostrar un mensaje de error en la interfaz aquí
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h2 className={estilos.saludoPrincipal}>{saludo}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;