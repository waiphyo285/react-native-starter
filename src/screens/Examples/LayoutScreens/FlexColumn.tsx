import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexColumn = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
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

export default FlexColumn;