import React, {useEffect, useState} from 'react';
import {AppBar, ColorPicker, Gallery, PriceLine, Section} from 'components';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getProduct} from 'services';
import {Product} from 'services/products';

export const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      const nextProduct = await getProduct(1);
      setProduct(nextProduct);
    };
    fetchProduct();
  });

  return (
    <View style={styles.screenContainer}>
      <AppBar showFavButton={true} />
      {product && (
        <>
          <ScrollView style={styles.detailsContent}>
            <View style={styles.gallery}>
              <Gallery images={product.images ?? []} />
            </View>

            <Section>
              <Text style={styles.text}>{product.name}</Text>
              <PriceLine
                style={styles.priceLine}
                price={product.price}
                prevPrice={product.prevPrice}
              />
            </Section>

            {product.colors && (
              <Section header={'Select Color'}>
                <ColorPicker colors={product.colors} />
              </Section>
            )}

            <Section header={'Description'}>
              <Text style={styles.text}>{product.description}</Text>
            </Section>
          </ScrollView>

          <View style={styles.addToCartButton}>
            <Button color={'#008ace'} title={'ADD TO CART'} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  detailsContent: {
    padding: 15,
    paddingTop: 0,
  },
  gallery: {
    paddingTop: 30,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
    color: '#4a4a4a',
  },
  priceLine: {
    paddingTop: 15,
    width: '50%',
  },
  addToCartButton: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
  },
});
