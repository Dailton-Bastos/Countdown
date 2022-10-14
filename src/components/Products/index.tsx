import { Product } from './Product';

import './global.css';

export const ListProducts = () => {
  return (
    <div className="blackFriday__products">
      <div className="products__content">
        <div className="products__content--title">
          <h1>BLACK FRIDAY FIBRA CIRÚRGICA</h1>
        </div>

        <div className="products__content--subTitle">
          <h2>Produtos Médicos e Hospitalares Online</h2>
        </div>

        <div className="products__content--grid">
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="1"
            brand="Littmann"
            name="Lorem inpsum"
          />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="2"
            brand="Spirit"
            name="Lorem inpsum"
          />
          <Product link="#" image="https://via.placeholder.com/200x200/" position="3" brand="MD" name="Lorem inpsum" />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="4"
            brand="Injex"
            name="Lorem inpsum"
          />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="5"
            brand="Fibrasca"
            name="Lorem inpsum"
          />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="6"
            brand="Fibrasca"
            name="Lorem inpsum"
          />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="7"
            brand="Littmann"
            name="Lorem inpsum"
          />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="8"
            brand="Spirit"
            name="Lorem inpsum"
          />
          <Product link="#" image="https://via.placeholder.com/200x200/" position="9" brand="MD" name="Lorem inpsum" />
          <Product
            link="#"
            image="https://via.placeholder.com/200x200/"
            position="10"
            brand="Injex"
            name="Lorem inpsum"
          />
        </div>
      </div>
    </div>
  );
};
