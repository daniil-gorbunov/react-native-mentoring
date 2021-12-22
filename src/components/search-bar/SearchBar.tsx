import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.barContainer}>
      <View style={styles.inputContainer}>
        <Icon style={styles.searchIcon} name="search" size={20} />
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginLeft: -5,
    marginRight: -5,
    marginTop: -2,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8f8f8f',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    paddingLeft: 10,
    color: '#8f8f8f',
  },
});
