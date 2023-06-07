import { getProducts } from '@api/firebase';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

interface ProductsProps {
  id: string;
  category: string;
  description: string;
  file: string;
  image: string;
  options: string[];
  price: number;
  title: string;
}

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  }: UseQueryResult<ProductsProps[]> = useQuery(['products'], () =>
    getProducts()
  );
  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>error</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
