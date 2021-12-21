import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AppBar: React.FC = () => {
  return (
    <View style={styles.barContainer}>
      <Icon name={'menu'} size={25} color="#fff" />
      <Text style={styles.title}>Ecommerce Store</Text>
      <Icon name={'shopping-cart'} size={25} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: '#008ace',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
});
