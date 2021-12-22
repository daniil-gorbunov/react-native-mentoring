import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Product} from 'services/products';
import {PriceLine} from 'components';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product: {
    id,
    attributes: {
      name,
      price,
      display_price: displayPrice,
      compare_at_price: compareAtPrice,
      display_compare_at_price: displayCompareAtPrice,
    },
  },
}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{uri: `https://picsum.photos/seed/${id}/100/100`}}
      />
      <View style={styles.subtext}>
        <Text style={styles.name}>{name}</Text>
        <PriceLine
          price={price}
          displayPrice={displayPrice}
          compareAtPrice={compareAtPrice}
          displayCompareAtPrice={displayCompareAtPrice}
        />
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
});
