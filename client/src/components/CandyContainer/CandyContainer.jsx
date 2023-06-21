import React, { useEffect, useState } from 'react';
import CandyCard from '../CandyCard/CandyCard';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCandy } from '../../redux/actions';

function CandyContainer() {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allCandy);
  const combos = products.filter((product) => product.category === 'combos');
  const pochoclos = products.filter((product) => product.category === 'pochoclos');
  const bebidas = products.filter((product) => product.category === 'bebidas');
  const snacks = products.filter((product) => product.category === 'snacks');
  const cafeteria = products.filter((product) => product.category === 'cafeteria');
  const golosinas = products.filter((product) => product.category === 'golosinas');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandy());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className="mb-10">CandyContainer</div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mt-28 flex flex-col items-center ">
          <h2>Combos</h2>
          <div className="flex flex-wrap justify-center">
            {combos.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

          <h2>Pochoclos</h2>
          <div className="flex flex-wrap justify-center">
            {pochoclos.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

          <h2>Bebidas</h2>
          <div className="flex flex-wrap justify-center">
            {bebidas.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

          <h2>Snacks</h2>
          <div className="flex flex-wrap justify-center">
            {snacks.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

          <h2>Cafeteria</h2>
          <div className="flex flex-wrap justify-center">
            {cafeteria.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

          <h2>Golosinas</h2>
          <div className="flex flex-wrap justify-center">
            {golosinas.map(({ id, name, description, price, image }) => (
              <CandyCard key={id} name={name} description={description} price={price} image={image} />
            ))}
          </div>

        </div>
      )}
    </>
  );
}

export default CandyContainer;
