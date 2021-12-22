import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ColorPickerProps {
  colors: string[];
  onColorPress?: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  onColorPress,
}) => {
  return (
    <View style={styles.colorPicker}>
      {colors.map(color => (
        <TouchableOpacity
          key={color}
          onPress={() => {
            onColorPress && onColorPress(color);
          }}>
          <Text style={styles.color}>{color}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  colorPicker: {
    flexDirection: 'row',
  },
  color: {
    color: '#4a4a4a',
    backgroundColor: '#f7f7f7',
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
});
