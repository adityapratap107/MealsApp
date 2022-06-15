import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// type MealDetailsProps = {
//   duration: number;
//   complexity: string;
//   affordability: string;
//   // textStyle: React.ReactPropTypes.style;
// };

const MealDetails = ({duration, complexity, affordability, textStyle}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
