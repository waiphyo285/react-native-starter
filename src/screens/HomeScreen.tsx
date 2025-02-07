import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Create a component for the General tab content
const GeneralTab = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="FlatList"
          onPress={() => navigation.navigate('FlatList')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="SectionList"
          onPress={() => navigation.navigate('SectionList')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="TextInput"
          onPress={() => navigation.navigate('TextInput')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Image" onPress={() => navigation.navigate('Image')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="AnimatedOne"
          onPress={() => navigation.navigate('AnimatedOne')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="AnimatedTwo"
          onPress={() => navigation.navigate('AnimatedTwo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="AnimatedThree"
          onPress={() => navigation.navigate('AnimatedThree')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="AnimatedFour"
          onPress={() => navigation.navigate('AnimatedFour')}
        />
      </View>
    </ScrollView>
  );
};

// Create a component for the Layout tab content
const LayoutTab = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Layout Examples"
          onPress={() => navigation.navigate('Layout')}
        />
      </View>
    </ScrollView>
  );
};

// Main HomeScreen component
const HomeScreen = ({ navigation }: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GeneralTab"
        component={GeneralTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LayoutTab"
        component={LayoutTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-grid" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 8,
    marginHorizontal: 8,
  },
});

export default HomeScreen;
