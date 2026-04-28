import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ButtonsScreen } from './src/screens/ButtonsScreen';
import { TabsScreen } from './src/screens/TabsScreen';
import { ListTileScreen } from './src/screens/ListTileScreen';
import { customTransitionSpec, customIOSInterpolator } from './src/factory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: customTransitionSpec,
              close: customTransitionSpec,
            },
            cardStyleInterpolator: customIOSInterpolator,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Buttons" component={ButtonsScreen} />
          <Stack.Screen name="Tabs" component={TabsScreen} />
          <Stack.Screen name="ListTiles" component={ListTileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
