import React from 'react';
import { FlatList, Text } from 'react-native';

const FlatListScreen = () => {
  return (
    <FlatList
      data={[
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
      ]}
      renderItem={({ item }) => (
        <Text style={{ padding: 10, fontSize: 18 }}>{item.key}</Text>
      )}
    />
  );
};

export default FlatListScreen;
