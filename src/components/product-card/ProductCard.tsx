import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Product} from 'services/products';

interface ProductCardProps {
  product: Product;
}

const getDiscountLine = (newPrice: number, oldPrice?: number): string =>
  oldPrice && oldPrice > newPrice
    ? `${Math.round(100 * (1 - newPrice / oldPrice))}% Off`
    : '';

export const ProductCard: React.FC<ProductCardProps> = ({
  product: {name, image, price, prevPrice},
}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.subtext}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.prices}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.prevPrice}>${prevPrice}</Text>
          <Text style={styles.discount}>
            {getDiscountLine(price, prevPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 160,
    height: 160,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
  subtext: {
    width: '100%',
  },
  name: {
    color: '#4a4a4a',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
  },
  prices: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {
    color: '#4a4a4a',
    fontFamily: 'Roboto',
    fontWeight: '700',
    flexGrow: 1,
  },
  prevPrice: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#8f8f8f',
    textDecorationLine: 'line-through',
    flexGrow: 1,
  },
  discount: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#00a8f3',
    flexGrow: 1,
  },
});
