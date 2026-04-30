import '@testing-library/jest-native/extend-expect';

// Polyfill structuredClone which is missing in some Jest environments
// @ts-ignore
global.structuredClone = (val: any) => JSON.parse(JSON.stringify(val));

// Prevent Expo winter runtime from installing polyfills that break Jest
jest.mock('expo/src/winter/installGlobal', () => ({
  installGlobal: jest.fn(),
}));
jest.mock('expo/src/winter/runtime.native', () => ({}));
jest.mock('expo/src/winter/ImportMetaRegistry', () => ({
  ImportMetaRegistry: { get: jest.fn(), set: jest.fn() },
}));

// Mock Worklets
jest.mock('react-native-worklets', () => ({
  Worklets: {
    createRunOnJS: (fn: any) => fn,
    createRunOnUI: (fn: any) => fn,
  },
}));

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const React = require('react');
  const { View, Text, Image, ScrollView } = require('react-native');
  return {
    __esModule: true,
    default: {
      call: jest.fn(),
      View,
      Text,
      Image,
      ScrollView,
      createAnimatedComponent: (cb: any) => cb,
    },
    useSharedValue: (val: any) => ({ value: val }),
    useAnimatedStyle: (fn: any) => fn(),
    useDerivedValue: (fn: any) => ({ value: fn() }),
    interpolateColor: (val: any, input: any, output: any) => output[0],
    Extrapolation: {
      CLAMP: 'clamp',
    },
    withTiming: (val: any) => val,
    withRepeat: (val: any) => val,
    withSpring: (val: any) => val,
    Easing: {
      linear: (t: any) => t,
      out: (f: any) => f,
      in: (f: any) => f,
    },
    createAnimatedComponent: (cb: any) => cb,
  };
});

// Mock Skia
jest.mock('@shopify/react-native-skia', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Canvas: ({ children, style }: any) => React.createElement(View, { style }, children),
    Rect: () => null,
    RoundedRect: () => null,
    LinearGradient: () => null,
    Group: ({ children }: any) => children,
    rect: (x: number, y: number, w: number, h: number) => ({ x, y, w, h }),
    rrect: (r: any, rx: number, ry: number) => ({ rect: r, rx, ry }),
    vec: (x: number, y: number) => ({ x, y }),
    Shadow: () => null,
  };
});

// Mock Expo Haptics
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  ImpactFeedbackStyle: {
    Light: 'light',
  },
}));

// Mock Safe Area Context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

// Mock Expo Icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Feather: (props: any) => React.createElement(Text, props),
    Ionicons: (props: any) => React.createElement(Text, props),
    MaterialIcons: (props: any) => React.createElement(Text, props),
  };
});
