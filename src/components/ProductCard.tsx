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
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`W${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
