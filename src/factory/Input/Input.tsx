import React, { useMemo, useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withTiming, 
  interpolateColor,
  useSharedValue 
} from 'react-native-reanimated';

import { createStyles } from './Input.styles';
import { Text } from '../Text/Text';
import { useTheme } from '../ThemeContext';

export interface InputProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode;
  error?: string | boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const Input = ({
  label,
  icon,
  error,
  containerStyle,
  inputStyle,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [isFocused, setIsFocused] = useState(false);
  
  const focusValue = useSharedValue(0);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    focusValue.value = withTiming(1, { duration: 200 });
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    focusValue.value = withTiming(0, { duration: 200 });
    onBlur?.(e);
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      focusValue.value,
      [0, 1],
      [error ? colors.error : colors.border, error ? colors.error : colors.primary]
    );

    return {
      borderColor,
    };
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <Animated.View 
        style={[
          styles.inputContainer,
          animatedContainerStyle,
          error ? styles.inputContainerError : null,
        ]}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={colors.muted}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </Animated.View>

      {typeof error === 'string' && error.length > 0 && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};
