import axios from 'axios';

const BASE_URL = 'https://rn-mentoring.herokuapp.com/api/v2/storefront';

export interface Product {
  id: string;
  type: string;
  attributes: {
    name: string;
    price: string;
    display_price: string;
    compare_at_price: string;
    display_compare_at_price: string;
    description: string;
  };
  relationships: {
    images: {
      data: [];
    };
  };
}

export const getProducts = async (): Promise<Product[]> => {
  const {
    data: {data},
  } = await axios.get(`${BASE_URL}/products`, {
    params: {
      include: 'images',
      'fields[product]':
        'name,price,display_price,compare_at_price,display_compare_at_price',
    },
  });

  return data;
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const {
    data: {data},
  } = await axios.get(`${BASE_URL}/products/${id}`, {
    params: {
      include: 'images,option_types',
      'fields[product]':
        'name,price,display_price,compare_at_price,display_compare_at_price,description',
    },
  });

  data.relationships.images = data.relationships.images ?? {};
  data.relationships.images.data = Array.from({length: 5}, () =>
    Math.floor(Math.random() * 100),
  ).map(seed => `https://picsum.photos/seed/${seed}/100/100`);

  return data;
};
