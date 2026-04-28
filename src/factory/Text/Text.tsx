import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { styles } from './Text.styles';
import { TypographyScale } from '../factory';

export interface TextProps extends RNTextProps {
  size?: TypographyScale;
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'foreground' | 'muted' | 'primary' | 'success' | 'error' | 'white';
  truncate?: boolean | number;
  style?: TextStyle | TextStyle[];
}

export const Text = ({
  size = 'base',
  weight = 'normal',
  color = 'foreground',
  truncate,
  style,
  children,
  ...props
}: TextProps) => {
  const numberOfLines = typeof truncate === 'number' ? truncate : truncate ? 1 : undefined;

  return (
    <RNText
      style={[
        styles[size],
        styles[weight],
        styles[color],
        style
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={truncate ? 'tail' : undefined}
      {...props}
    >
      {children}
    </RNText>
  );
};
