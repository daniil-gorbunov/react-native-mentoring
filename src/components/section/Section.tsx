import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SectionProps {
  header?: string;
}

export const Section: React.FC<SectionProps> = ({header, children}) => {
  return (
    <View style={styles.section}>
      {header && <Text style={styles.sectionHeader}>{header}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
  },
  sectionHeader: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    color: '#4a4a4a',
    marginBottom: 10,
  },
});
