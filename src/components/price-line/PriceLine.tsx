import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

const getDiscountLine = (newPrice: number, oldPrice?: number): string =>
  oldPrice && oldPrice > newPrice
    ? `${Math.round(100 * (1 - newPrice / oldPrice))}% Off`
    : '';

interface PriceLineProps {
  price: string;
  displayPrice: string;
  compareAtPrice: string;
  displayCompareAtPrice: string;
  style?: StyleProp<ViewStyle>;
}

export const PriceLine: React.FC<PriceLineProps> = ({
  price,
  displayPrice,
  compareAtPrice,
  displayCompareAtPrice,
  style: propsStyle,
}) => {
  return (
    <View style={[styles.prices, propsStyle]}>
      <Text style={styles.price}>{displayPrice}</Text>
      <Text style={styles.prevPrice}>{displayCompareAtPrice}</Text>
      <Text style={styles.discount}>
        {getDiscountLine(Number(price), Number(compareAtPrice))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
