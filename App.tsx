import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Main} from 'screens';

export const App = () => {
  return (
    <SafeAreaView style={styles.appArea}>
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appArea: {
    backgroundColor: '#fff',
    height: '100%',
  },
});
