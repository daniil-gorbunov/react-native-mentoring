import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AppBarProps {
  title?: string;
  showMenuButton?: boolean;
  showFavButton?: boolean;
  onFavPress?: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({
  title = '',
  showMenuButton = false,
  showFavButton = false,
  onFavPress,
}) => {
  return (
    <View style={styles.barContainer}>
      {showMenuButton ? (
        <Icon name={'menu'} size={25} color="#fff" />
      ) : (
        <Icon name={'arrow-back'} size={25} color="#fff" />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        {showFavButton && (
          <Icon
            onPress={onFavPress}
            name={'favorite-border'}
            size={25}
            color="#fff"
          />
        )}
        <Icon
          style={styles.cartIcon}
          name={'shopping-cart'}
          size={25}
          color="#fff"
        />
      </View>
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
  icons: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cartIcon: {
    paddingLeft: 25,
  },
});
