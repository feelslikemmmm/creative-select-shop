interface ProductCardProps {
  product: {
    id: string;
    image: string;
    title: string;
    category: string;
    price: string;
  };
}

export default function ProductCard({
  product: { id, image, title, category, price },
}: ProductCardProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`W${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}
