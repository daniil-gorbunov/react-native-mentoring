import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {/*Main,*/ ProductDetails} from 'screens';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appArea}>
        {/*<Main />*/}
        <ProductDetails />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appArea: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
});
