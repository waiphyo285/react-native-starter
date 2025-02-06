import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, borderBottomWidth: 1, padding: 5 }}
        placeholder="Type here!"
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => (word ? '🍕' : ''))
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTextScreen;
