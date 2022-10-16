import { Product } from './Product';

import productImagem from '../../assets/product_image.png';

import './global.css';

const products = [
  {
    link: '#',
    image: productImagem,
    position: '1',
    brand: 'Littmann',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '2',
    brand: 'Spirit',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '3',
    brand: 'MD',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '4',
    brand: 'Injex',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '5',
    brand: 'Fibrasca',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '6',
    brand: 'Littmann',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '7',
    brand: 'Spirit',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '8',
    brand: 'Injex',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '9',
    brand: 'MD',
    name: 'Lorem inpsum',
  },
  {
    link: '#',
    image: productImagem,
    position: '10',
    brand: 'Spirit',
    name: 'Lorem inpsum',
  },
];

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
          {products.map((product) => (
            <Product
              key={product.position}
              link={product.link}
              image={product.image}
              position={product.position}
              brand={product.brand}
              name={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
