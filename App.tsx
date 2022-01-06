import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Main, ProductDetails} from 'screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {Navigator, Group, Screen} = createStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  ProductDetails: {productId: string};
};

const HeaderIcons: React.FC<{showFavButton?: boolean}> = ({showFavButton}) => {
  const ICON_SIZE = 25;
  const ICON_COLOR = '#fff';
  const commonIconProps = {size: ICON_SIZE, color: ICON_COLOR};

  return (
    <View style={styles.headerIcons}>
      {showFavButton && <Icon name={'favorite-border'} {...commonIconProps} />}
      <Icon
        style={styles.cartIcon}
        name={'shopping-cart'}
        {...commonIconProps}
      />
    </View>
  );
};

export const App = () => {
  return (
    <SafeAreaView style={styles.appArea}>
      <NavigationContainer>
        <Navigator>
          <Group
            screenOptions={{
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: '#fff',
            }}>
            <Screen
              name="Main"
              component={Main}
              options={{
                title: 'Ecommerce Store',
                headerRight: () => <HeaderIcons />,
              }}
            />
            <Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                title: '',
                headerRight: () => <HeaderIcons showFavButton={true} />,
              }}
            />
          </Group>
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appArea: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    backgroundColor: '#008ace',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  headerIcons: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  cartIcon: {
    paddingLeft: 25,
  },
});
