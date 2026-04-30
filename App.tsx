import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ButtonsScreen } from './src/screens/ButtonsScreen';
import { TabsScreen } from './src/screens/TabsScreen';
import { ListTileScreen } from './src/screens/ListTileScreen';
import { IconButtonsScreen } from './src/screens/IconButtonsScreen';
import { TextScreen } from './src/screens/TextScreen';
import { DividerScreen } from './src/screens/DividerScreen';
import { SelectionScreen } from './src/screens/SelectionScreen';
import { InputsScreen } from './src/screens/InputsScreen';
import { SlidersScreen } from './src/screens/SlidersScreen';
import { BottomBarScreen } from './src/screens/BottomBarScreen';
import { SpinnerScreen } from './src/screens/SpinnerScreen';
import { customTransitionSpec, customIOSInterpolator, ThemeProvider } from './src/factory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
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
            <Stack.Screen name="IconButtons" component={IconButtonsScreen} />
            <Stack.Screen name="Typography" component={TextScreen} />
            <Stack.Screen name="Dividers" component={DividerScreen} />
            <Stack.Screen name="Selection" component={SelectionScreen} />
            <Stack.Screen name="Inputs" component={InputsScreen} />
            <Stack.Screen name="Sliders" component={SlidersScreen} />
            <Stack.Screen name="BottomBar" component={BottomBarScreen} />
            <Stack.Screen name="Spinners" component={SpinnerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
