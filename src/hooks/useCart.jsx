import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCart, addOrUpdateToCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  // uid가 null이 아닌 경우에만 cartQuery가 실행되도록  enabled 옵션 사용
  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', uid]);
      },
    }
  );

  const removeItem = useMutation((product) => removeFromCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
