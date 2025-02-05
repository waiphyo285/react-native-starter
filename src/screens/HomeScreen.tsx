import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="Layout"
          onPress={() => navigation.navigate('Layout')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="FlatList"
          onPress={() => navigation.navigate('FlatList')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="SectionList"
          onPress={() => navigation.navigate('SectionList')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="TextInput"
          onPress={() => navigation.navigate('TextInput')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button title="Image" onPress={() => navigation.navigate('Image')} />
      </View>
    </View>
  );
};

export default HomeScreen;
