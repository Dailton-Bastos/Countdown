interface Props {
  link: string;
  image: string;
  name: string;
  description: string;
}

export const Category = ({ link, image, name, description }: Props) => {
  return (
    <a href={link} className="category__content">
      <div className="category__content--top">
        <div className="category__content--image">
          <img src={image} alt={name} />
        </div>
      </div>

      <div className="category__content--bottom">
        <p className="category__content--name">{name}</p>

        <p className="category__content--description">{description}</p>
      </div>
    </a>
  );
};
