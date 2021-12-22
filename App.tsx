import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {/*Main,*/ ProductDetails} from 'screens';

export const App = () => {
  return (
    <SafeAreaView style={styles.appArea}>
      {/*<Main />*/}
      <ProductDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appArea: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
});
