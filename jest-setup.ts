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

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
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

// Mock Expo Icons
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

// Mock Platform and StatusBar for Header
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn((dict) => dict.ios),
}));

jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () => ({
  currentHeight: 44,
}));

// @ts-ignore
global.__ExpoImportMetaRegistry = {
  get: jest.fn(),
  set: jest.fn(),
};
