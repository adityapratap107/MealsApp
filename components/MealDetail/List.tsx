import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const List = ({data}) => {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#bfb4ac',
  },
  itemText: {
    color: '#1c130c',
    textAlign: 'center',
  },
});

export default List;
