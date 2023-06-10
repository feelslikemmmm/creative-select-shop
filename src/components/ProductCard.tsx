import useComma from '@hooks/useComma';
import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from 'src/types';

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}: ProductCardProps) {
  const navigate = useNavigate();
  let showPrice = useComma(price);

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${showPrice}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
