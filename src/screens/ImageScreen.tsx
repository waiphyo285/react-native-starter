import React from 'react';
import { Image, View } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageScreen;
