import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ScannerQrCode from '../screens/QrCode'
import Visitants from '../screens/Visitants'
import Setting from '../screens/Settings'
import Menu from '../screens/Menu'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'school') {
              iconName = focused ? 'qr-code' : 'qr-code-outline'
            } else if (route.name === 'home') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === 'visitants') {
              iconName = focused ? 'people' : 'people-outline'
            } else if (route.name === 'settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="home" component={Menu} options={{ title: 'Home' }} />
        <Tab.Screen
          name="school"
          component={ScannerQrCode}
          options={{ tabBarBadge: 3, title: 'Escola de Profeta' }}
        />
        {/* <Tab.Screen
          name="visitants"
          component={Visitants}
          options={{ title: 'Visitantes' }}
        /> */}
        <Tab.Screen
          name="settings"
          component={Setting}
          options={{ title: 'Configurações' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
