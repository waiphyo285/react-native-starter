import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexRow = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'lightgreen'}} />
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View style={{flex: 3, backgroundColor: 'darkgreen'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FlexRow;