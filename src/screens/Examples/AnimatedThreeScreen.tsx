import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedThreeScreen = () => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  // Animated styles using useAnimatedStyle
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Animated.View style={[styles.box, animatedStyles]} />{' '}
      <Button onPress={handlePress} title="Click me" />{' '}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    marginBottom: 20,
  },
});

export default AnimatedThreeScreen;
