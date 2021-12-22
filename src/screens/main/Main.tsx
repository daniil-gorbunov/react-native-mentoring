import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppBar, ProductCard, SearchBar} from 'components';
import {getProducts, Product} from 'services/products';

export const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const nextProducts = await getProducts();
      setProducts(nextProducts);
    };
    fetchProducts();
  });

  return (
    <View>
      <AppBar title={'Ecommerce Store'} />
      <FlatList
        ListHeaderComponent={<SearchBar />}
        columnWrapperStyle={styles.columnWrapper}
        stickyHeaderIndices={[0]}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductCard key={item.id} product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    margin: 10,
    justifyContent: 'space-between',
  },
});
