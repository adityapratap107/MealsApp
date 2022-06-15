import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#bfb4ac',
    borderBottomWidth: 2,
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: '#bfb4ac',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Subtitle;
