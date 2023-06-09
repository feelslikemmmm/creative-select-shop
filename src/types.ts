import { UseQueryResult } from '@tanstack/react-query';
import { User, UserCredential } from 'firebase/auth';

export type ProductsType = {
  id: string;
  image: string;
  file: string;
  title: string;
  price: number;
  category: string;
  description: string;
  options: string[];
};

export interface ProductDetailProps {
  state: {
    product: ProductsType;
  };
}

export type ProductsQueryResult = UseQueryResult<ProductsType[], unknown>;

export type ProductType = {
  id: string;
  image: string;
  file: string;
  title: string;
  price: number;
  category: string;
  description: string;
  option: string;
};

export type CartProductType = {
  id: string;
  image: string;
  option: string;
  price: number;
  quantity: number;
  title: string;
};

interface CoustomUser extends User {
  isAdmin: boolean;
}

export type UserType = null | CoustomUser;

export interface ProductCardProps {
  product: ProductsType;
}

export interface CartItemProps {
  product: CartProductType;
}

export interface PriceCardProps {
  text: string;
  price: number;
}

export interface UserProps {
  user: User;
}

export interface AuthContextProps {
  user: UserType | undefined;
  uid: string | null | undefined;
  login: () => Promise<void | UserCredential>;
  logout: () => Promise<void>;
}
