import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import NewsScreen from '../screens/NewsScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Hamburger = () => {
  const navigation = useNavigation();

  return (
    <MaterialIcons 
      name="menu" 
      size={24} 
      onPress={() => {navigation.openDrawer()}}
    />
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="NewsScreen"
    >
      <Stack.Screen 
        name="NewsScreen" 
        component={NewsScreen} 
        options={{title: 'All News', headerLeft: () => <Hamburger />}}
      />
      <Stack.Screen 
        name="NewsDetailsScreen" 
        component={NewsDetailsScreen} 
        options={{title: 'News Details'}}
      />
    </Stack.Navigator>
  );
}

function FavoritesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <Hamburger />
      }}  
    >
      <Stack.Screen 
      name="FavoritesScreen" 
      component={FavoritesScreen} 
      options={{title: 'Favorites'}}
    />
    </Stack.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <Hamburger />
      }}  
    >
      <Stack.Screen 
      name="AboutScreen" 
      component={AboutScreen} 
      options={{title: 'About'}}
    />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName
          if (route.name === 'Home') {
            iconName='home'
          } else if (route.name === 'Favorites') {
            iconName='favorite'
          }
          return <MaterialIcons name={iconName} size={24} />
        }
      })}>
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Favorites" component={FavoritesNavigator} />
    </Tabs.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="News" component={TabsNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
