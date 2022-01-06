import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AppBarProps {
  title?: string;
  showMenuButton?: boolean;
  showFavButton?: boolean;
  onFavPress?: () => void;
}

const ICON_SIZE = 25;
const ICON_COLOR = '#fff';
const commonIconProps = {size: ICON_SIZE, color: ICON_COLOR};

export const AppBar: React.FC<AppBarProps> = ({
  title = '',
  showMenuButton = false,
  showFavButton = false,
  onFavPress,
}) => {
  return (
    <View style={styles.barContainer}>
      <Icon
        name={showMenuButton ? 'menu' : 'arrow-back'}
        {...commonIconProps}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        {showFavButton && (
          <Icon
            onPress={onFavPress}
            name={'favorite-border'}
            {...commonIconProps}
          />
        )}
        <Icon
          style={styles.cartIcon}
          name={'shopping-cart'}
          {...commonIconProps}
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
