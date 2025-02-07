import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

const AnimatedOneScreen = () => {
  const width = useSharedValue(100); // Initial width

  const handlePress = () => {
    width.value = width.value + 50;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'lightgreen',
          marginBottom: 5,
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

export default AnimatedOneScreen;
