import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ProductCard, SearchBar} from 'components';
import {getProducts, Product} from 'services/products';

import {RootStackParamList} from '../../../App';

export const Main: React.FC<StackScreenProps<RootStackParamList, 'Main'>> = ({
  navigation,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = useCallback(async () => {
    setRefreshing(true);
    const nextProducts = await getProducts();
    setRefreshing(false);
    setProducts(nextProducts);
  }, []);

  const onRefresh = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <View style={styles.screenContainer}>
      <FlatList
        ListHeaderComponent={<SearchBar />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        columnWrapperStyle={styles.columnWrapper}
        stickyHeaderIndices={[0]}
        numColumns={2}
        data={products}
        renderItem={({item}) => (
          <ProductCard
            key={item.id}
            product={item}
            onPress={product =>
              navigation.navigate('ProductDetails', {productId: product.id})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  columnWrapper: {
    margin: 10,
    justifyContent: 'space-between',
  },
});
