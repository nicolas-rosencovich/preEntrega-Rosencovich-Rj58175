import React, { useState, useEffect } from 'react';
import { getProductById } from '../Asyncmock/AsyncMock.jsx';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;