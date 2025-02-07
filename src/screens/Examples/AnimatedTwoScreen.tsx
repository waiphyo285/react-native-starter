import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedTwoScreen = () => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Animated.View style={[styles.box, { transform: [{ translateX }] }]} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen',
    marginBottom: 20,
  },
});

export default AnimatedTwoScreen;
