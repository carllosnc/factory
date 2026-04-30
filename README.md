# Factory

Factory is a premium UI component library for React Native, designed for high-performance interactions and sophisticated visual design. It leverages the power of React Native Skia for rendering and Reanimated for fluid, hardware-accelerated animations.

## Core Principles

- Performance: Utilizing Skia for complex UI elements to ensure 60/120 FPS rendering.
- Interactivity: Deep integration with Reanimated and Gesture Handler for tactile feedback.
- Consistency: A robust theme system with support for light and dark modes.
- Professional Aesthetics: Carefully curated color palettes and typography.

## Technical Stack

- React Native: Foundation for cross-platform development.
- Expo: Development environment and platform APIs.
- React Native Skia: High-performance 2D graphics.
- React Native Reanimated: Interaction and animation engine.
- React Native Gesture Handler: Native touch handling.
- TypeScript: Type-safe component APIs.
- Bun: Fast package management and runtime.

## Component Library

The library includes a comprehensive set of building blocks:

- Navigation: BottomBar, Tabs, Custom Page transitions.
- Layout: Header, Divider, ListTile.
- Feedback: BottomSheet, Typography.
- Controls: Button, IconButton, Slider, Switch, Radio, Checkbox, Input.

## Getting Started

### Prerequisites

- Bun installed on your machine.
- Expo CLI.

### Installation

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run start
   ```

### Running on Devices

- Android: `bun run android`
- iOS: `bun run ios`
- Web: `bun run web`

## Project Structure

- `src/factory`: Core design system, theme definitions, and component implementations.
- `src/screens`: Showcase screens demonstrating component usage.
- `assets`: Project-wide static assets.

## Theming

Factory uses a centralized theme provider located in `src/factory/ThemeContext.tsx`. Themes are defined with semantic tokens (e.g., `surface`, `primary`, `onPrimary`) to ensure consistency across light and dark modes.

## Contributing

Maintain code quality by following the established patterns in the existing components. Ensure all new components are documented and added to the showcase screens.
