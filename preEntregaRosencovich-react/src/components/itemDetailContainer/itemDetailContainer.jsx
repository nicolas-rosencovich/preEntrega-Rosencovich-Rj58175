import React, { useEffect, useState } from 'react';
import { getProductById } from '../Asyncmock/AsyncMock.jsx';
import ItemDetail from '../itemDetail/itemDetail.jsx';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='ItemDetailContainer'>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;