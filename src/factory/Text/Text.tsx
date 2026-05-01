import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle, StyleProp, ColorValue } from 'react-native';
import { useTheme } from '../ThemeContext';
import { typography, TypographyScale } from '../factory';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
export type TextWeight = 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  size?: TypographyScale;
  weight?: TextWeight;
  color?: ColorValue;
  muted?: boolean;
  truncate?: boolean | number;
  style?: StyleProp<TextStyle>;
}

const getFontWeight = (weight: TextWeight): TextStyle['fontWeight'] => {
  switch (weight) {
    case 'thin': return '100';
    case 'light': return '300';
    case 'regular': return '400';
    case 'medium': return '500';
    case 'semibold': return '600';
    case 'bold': return '700';
    case 'black': return '900';
    default: return '400';
  }
};

const variantStyles: Record<TextVariant, TextStyle> = {
  h1: { fontSize: typography.xl2, fontWeight: '700' },
  h2: { fontSize: typography.xl, fontWeight: '600' },
  h3: { fontSize: typography.lg, fontWeight: '600' },
  body: { fontSize: typography.base, fontWeight: '400' },
  caption: { fontSize: typography.sm, fontWeight: '400' },
  label: { fontSize: typography.xs, fontWeight: '500' },
};

export const Text = ({
  variant = 'body',
  size,
  weight,
  color,
  muted,
  truncate,
  style,
  children,
  ...props
}: TextProps) => {
  const { colors } = useTheme();
  const numberOfLines = typeof truncate === 'number' ? truncate : truncate ? 1 : undefined;

  const baseVariantStyle = variantStyles[variant];

  const finalStyle: TextStyle = {
    color: muted ? colors.muted : (color || colors.foreground),
    fontSize: size ? typography[size] : baseVariantStyle.fontSize,
    fontWeight: weight ? getFontWeight(weight) : baseVariantStyle.fontWeight,
  };

  return (
    <RNText
      style={[finalStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={truncate ? 'tail' : undefined}
      {...props}
    >
      {children}
    </RNText>
  );
};

