import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../Asyncmock/AsyncMock.jsx';
import estilos from '../ItemListContainer/itemListContainer.module.css';
import ItemList from '../cartWidget/ItemList/itemList.jsx';
import { useParams } from 'react-router-dom';

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categoryId) {
          const response = await getProductsByCategory(categoryId);
          setProducts(response);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h2 className={estilos.saludoPrincipal}>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;