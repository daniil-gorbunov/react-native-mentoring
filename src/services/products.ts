import {ImageSourcePropType} from 'react-native';

const imgXiaomi = require('assets/images/xiaomi.png');
const imgOppo = require('assets/images/oppo.png');
const imgIphone = require('assets/images/iphone.png');

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Xiaomi Mi A3',
    image: require('assets/images/xiaomi.png'),
    price: 222,
    prevPrice: 244,
    images: [imgXiaomi, imgOppo, imgIphone],
    colors: ['Blue', 'Red', 'Black'],
    description:
      'The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.',
  },
  {
    id: 2,
    name: 'OPPO K3',
    image: require('assets/images/oppo.png'),
    price: 150,
    prevPrice: 200,
    images: [imgXiaomi, imgOppo, imgIphone],
    colors: ['Blue', 'Red', 'Black'],
    description:
      'The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.',
  },
  {
    id: 3,
    name: 'IPhone XR',
    image: require('assets/images/iphone.png'),
    price: 849,
    prevPrice: 749,
    images: [imgXiaomi, imgOppo, imgIphone],
    colors: ['Blue', 'Red', 'Black'],
    description:
      'The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.',
  },
];

export interface Product {
  id: number;
  name: string;
  image: ImageSourcePropType;
  images: ImageSourcePropType[];
  price: number;
  prevPrice?: number;
  description: string;
  colors?: string[];
}

export const getProducts = async (): Promise<Product[]> => {
  return MOCK_PRODUCTS;
};

export const getProduct = async (id: number): Promise<Product | undefined> => {
  return MOCK_PRODUCTS.find(product => product.id === id);
};
