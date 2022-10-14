interface Props {
  link: string;
  image: string;
  position: string;
  brand: string;
  name: string;
}

export const Product = ({ link, image, position, brand, name }: Props) => {
  return (
    <a href={link} className="product__content">
      <div className="product__content--top">
        <div className="product__content--image">
          <img src={image} alt={name} />
        </div>
        <span className="product__content--position">{position}</span>
      </div>

      <div className="product__content--bottom">
        <p className="product__content--brand">{brand}</p>

        <p className="product__content--name">{name}</p>
      </div>
    </a>
  );
};
