import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IndicatorProps {
  totalNumber: number;
  activeIdx: number;
  onDotPress: (index: number) => void;
}

export const Indicator: React.FC<IndicatorProps> = ({
  totalNumber,
  activeIdx,
  onDotPress,
}) => {
  const dots = new Array(totalNumber).fill('•');
  return (
    <View style={styles.indicator}>
      {dots.map((dot, index) => {
        return (
          <Text
            key={index}
            onPress={() => {
              onDotPress(index);
            }}
            style={[
              styles.imageDot,
              index === activeIdx && styles.imageDotActive,
            ]}>
            {dot}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageDot: {
    color: '#c3c3c3',
    fontSize: 40,
    paddingLeft: 2,
    paddingRight: 2,
  },
  imageDotActive: {
    color: '#008ace',
  },
});
