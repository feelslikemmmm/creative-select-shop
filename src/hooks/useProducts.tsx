import { getProducts as fetchProducts, addNewProduct } from '@api/firebase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductsType } from 'src/types';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(['products'], fetchProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }: { product: ProductsType; url: string }) =>
      addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  );

  return { productsQuery, addProduct };
}
