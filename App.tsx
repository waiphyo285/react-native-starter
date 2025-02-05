import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import SectionListScreen from './src/screens/SectionListScreen';
import TextInputScreen from './src/screens/TextInputScreen';
import PizzaTextScreen from './src/screens/PizzaTextScreen';
import ImageScreen from './src/screens/ImageScreen';

import LayoutScreen from './src/screens/LayoutScreen';
import FlexRow from './src/Layouts/FlexRow';
import FlexColumn from './src/Layouts/FlexColumn';
import FlexDirection from './src/Layouts/FlexDirection';
import JustifyContent from './src/Layouts/JustifyContent';
import AlignItems from './src/Layouts/AlignItems';
import AlignSelf from './src/Layouts/AlignSelf';
import AlignContent from './src/Layouts/AlignContent';
import FlexWrap from './src/Layouts/FlexWrap';
import Position from './src/Layouts/Position';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="PizzaText" component={PizzaTextScreen} />


        <Stack.Screen name="Layout" component={LayoutScreen} />
        <Stack.Screen name='FlexRow' component={FlexRow}/>
        <Stack.Screen name='FlexColumn' component={FlexColumn}/>
        <Stack.Screen name='FlexDirection' component={FlexDirection}/>
        <Stack.Screen name='JustifyContent' component={JustifyContent}/>
        <Stack.Screen name='AlignItems' component={AlignItems}/>
        <Stack.Screen name='AlignSelf' component={AlignSelf}/>
        <Stack.Screen name='AlignContent' component={AlignContent}/>
        <Stack.Screen name='FlexWrap' component={FlexWrap}/>
        <Stack.Screen name='Position' component={Position}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
