import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from './Home';
import Conta from './Conta';
import Cardapio from './Cardapio';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTinColor: '#88aaee' }}>
      <Tab.Screen
        name="Página Principal"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="menu"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
