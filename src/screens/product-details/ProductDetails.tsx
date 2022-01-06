import React, {useCallback, useEffect, useState} from 'react';
import {ColorPicker, Gallery, PriceLine, Section} from 'components';
import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getProduct} from 'services';
import {Product} from 'services/products';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../../../App';

export const ProductDetails: React.FC<
  StackScreenProps<RootStackParamList, 'ProductDetails'>
> = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product>();
  const [refreshing, setRefreshing] = useState(false);

  const fetchProduct = useCallback(async (id: string) => {
    setRefreshing(true);
    const nextProduct = await getProduct(id);
    setRefreshing(false);
    setProduct(nextProduct);
  }, []);

  const onRefresh = useCallback(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);

  useEffect(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);

  return (
    <View style={styles.screenContainer}>
      {product && (
        <>
          <ScrollView
            style={styles.detailsContent}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.gallery}>
              <Gallery imageUrls={product.relationships.images.data ?? []} />
            </View>

            <Section>
              <Text style={styles.text}>{product.attributes.name}</Text>
              <PriceLine
                style={styles.priceLine}
                price={product.attributes.price}
                displayPrice={product.attributes.display_price}
                compareAtPrice={product.attributes.compare_at_price}
                displayCompareAtPrice={
                  product.attributes.display_compare_at_price
                }
              />
            </Section>

            <Section header={'Select Color'}>
              <ColorPicker colors={['Red', 'Green', 'Blue']} />
            </Section>

            <Section header={'Description'}>
              <Text style={styles.text}>{product.attributes.description}</Text>
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
