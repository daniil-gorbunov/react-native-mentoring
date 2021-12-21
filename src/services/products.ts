import {ImageSourcePropType} from 'react-native';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Xiaomi Mi A3',
    image: require('assets/images/xiaomi.png'),
    price: 222,
    prevPrice: 244,
  },
  {
    id: 2,
    name: 'OPPO K3',
    image: require('assets/images/oppo.png'),
    price: 150,
    prevPrice: 200,
  },
  {
    id: 3,
    name: 'IPhone XR',
    image: require('assets/images/iphone.png'),
    price: 849,
    prevPrice: 749,
  },
];

export interface Product {
  id: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  prevPrice?: number;
}

export const getProducts = async (): Promise<Product[]> => {
  return MOCK_PRODUCTS;
};

export const getProduct = async (id: number): Promise<Product | undefined> => {
  return MOCK_PRODUCTS.find(product => product.id === id);
};
