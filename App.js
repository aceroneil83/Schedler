import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Navbar from './screens/Navbar';
import AddSchedscreen from './screens/AddSchedscreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const homeIcon = require('./assets/image/home.png');
const userIcon = require('./assets/image/user.png');
const calIcon = require('./assets/image/calendar.png');

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: ({ navigation }) => <Navbar navigation={navigation} />,
          tabBarStyle: {
            height: 65, // Adjust the height of the entire tab bar
          },
          tabBarItemStyle: {
            paddingVertical: 10, // Adjust vertical padding for individual tab items
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={homeIcon} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name=" "
          component={AddSchedscreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={calIcon} style={{ width: 40, height: 40, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={userIcon} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
