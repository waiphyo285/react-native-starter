import React from 'react';
import {View, Button} from 'react-native';

const LayoutScreen = ({navigation}: any) => {
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
          title="FlexColumn"
          onPress={() => navigation.navigate('FlexColumn')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="FlexRow"
          onPress={() => navigation.navigate('FlexRow')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="FlexDirection"
          onPress={() => navigation.navigate('FlexDirection')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="JustifyContent"
          onPress={() => navigation.navigate('JustifyContent')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="AlignItems"
          onPress={() => navigation.navigate('AlignItems')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="AlignSelf"
          onPress={() => navigation.navigate('AlignSelf')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="AlignContent"
          onPress={() => navigation.navigate('AlignContent')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="FlexWrap"
          onPress={() => navigation.navigate('FlexWrap')}
        />
      </View>
      <View style={{width: '48%', marginBottom: 10}}>
        <Button
          title="Position"
          onPress={() => navigation.navigate('Position')}
        />
      </View>
    </View>
  );
};

export default LayoutScreen;
