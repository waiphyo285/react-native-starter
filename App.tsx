import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useUserStore from './src/store/userStore';

import LoginScreen from './src/screens/Auth/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LayoutScreen from './src/screens/LayoutScreen';

import FlatListScreen from './src/screens/Examples/FlatListScreen';
import SectionListScreen from './src/screens/Examples/SectionListScreen';
import TextInputScreen from './src/screens/Examples/TextInputScreen';
import PizzaTextScreen from './src/screens/Examples/PizzaTextScreen';
import ImageScreen from './src/screens/Examples/ImageScreen';

import FlexRow from './src/screens/Examples/FlexRowScreen';
import FlexColumn from './src/screens/Examples/FlexColumnScreen';
import FlexDirection from './src/screens/Examples/FlexDirectionScreen';
import JustifyContent from './src/screens/Examples/JustifyContentScreen';
import AlignItems from './src/screens/Examples/AlignItemsScreen';
import AlignSelf from './src/screens/Examples/AlignSelfScreen';
import AlignContent from './src/screens/Examples/AlignContentScreen';
import FlexWrap from './src/screens/Examples/FlexWrapScreen';
import Position from './src/screens/Examples/PositionScreen';

import AnimatedOneScreen from './src/screens/Examples/AnimatedOneScreen';
import AnimatedTwoScreen from './src/screens/Examples/AnimatedTwoScreen';
import AnimatedThreeScreen from './src/screens/Examples/AnimatedThreeScreen';
import AnimatedFourScreen from './src/screens/Examples/AnimatedFourScreen';

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const logoutUser = useUserStore(state => state.logoutUser);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerRight: () => (
                  <Button
                    title="Logout"
                    onPress={() => logoutUser()}
                    color="red"
                  />
                ),
              }}
            />
            <Stack.Screen name="Layout" component={LayoutScreen} />
            <Stack.Screen name="FlatList" component={FlatListScreen} />
            <Stack.Screen name="SectionList" component={SectionListScreen} />
            <Stack.Screen name="TextInput" component={TextInputScreen} />
            <Stack.Screen name="Image" component={ImageScreen} />
            <Stack.Screen name="PizzaText" component={PizzaTextScreen} />

            <Stack.Screen name="AnimatedOne" component={AnimatedOneScreen} />
            <Stack.Screen name="AnimatedTwo" component={AnimatedTwoScreen} />
            <Stack.Screen
              name="AnimatedThree"
              component={AnimatedThreeScreen}
            />
            <Stack.Screen name="AnimatedFour" component={AnimatedFourScreen} />

            <Stack.Screen name="FlexRow" component={FlexRow} />
            <Stack.Screen name="FlexColumn" component={FlexColumn} />
            <Stack.Screen name="FlexDirection" component={FlexDirection} />
            <Stack.Screen name="JustifyContent" component={JustifyContent} />
            <Stack.Screen name="AlignItems" component={AlignItems} />
            <Stack.Screen name="AlignSelf" component={AlignSelf} />
            <Stack.Screen name="AlignContent" component={AlignContent} />
            <Stack.Screen name="FlexWrap" component={FlexWrap} />
            <Stack.Screen name="Position" component={Position} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
