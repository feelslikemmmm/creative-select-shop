import { addOrUpdateToCart, getCart, removeFromCart } from '@api/firebase';
import { useAuthContenxt } from '@context/AuthContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartProductType } from 'src/types';

export default function useCart() {
  const { uid } = useAuthContenxt();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product: CartProductType) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', uid]);
      },
    }
  );

  const removeItem = useMutation((id: string) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
