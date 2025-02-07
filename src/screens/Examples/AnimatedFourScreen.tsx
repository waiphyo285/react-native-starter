import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedFourScreen = () => {
  const r = useSharedValue<number>(20);

  const handlePress = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress} title="Click me" />
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
  svg: {
    height: 250,
    width: '100%',
  },
});

export default AnimatedFourScreen;
