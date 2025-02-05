import React from 'react';
import { SectionList, Text } from 'react-native';

const SectionListScreen = () => {
  return (
    <SectionList
      sections={[
        { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
        {
          title: 'J',
          data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
        },
      ]}
      renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18 }}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{
          padding: 10,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: '#f7f7f7',
        }}>{section.title}</Text>
      )}
      keyExtractor={item => `basicListEntry-${item}`}
    />
  );
};

export default SectionListScreen;
