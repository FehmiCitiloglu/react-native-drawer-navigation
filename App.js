import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Drawer = createDrawerNavigator()

const BottomTab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b'
          // drawerActiveBackgroundColor: '#d6bcee',
          // drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#ccc' }
        }}
      >
        <BottomTab.Screen
          name={"Welcome"}
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name={"home"} color={color} size={size} />,

            // drawerLabel: 'Welcome Screen',
            // drawerIcon: ({ color, size }) => <Ionicons name={"home"} color={color} size={size} />
          }}
        />
        <BottomTab.Screen
          name={"User"}
          component={UserScreen}
          options={{
            tabBarLabel: 'user screen',
            tabBarIcon: ({ color, size }) => <Ionicons name={"person"} color={color} size={size} />
            // drawerLabel: 'User Screen',
            // drawerIcon: ({ color, size }) => <Ionicons name={"person"} color={color} size={size} />
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
