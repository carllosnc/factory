import { Text as RNText, TextProps as RNTextProps, TextStyle, StyleProp } from 'react-native';

export interface TextProps extends RNTextProps {
  truncate?: boolean | number;
  style?: StyleProp<TextStyle>;
}

export const Text = ({
  truncate,
  style,
  children,
  ...props
}: TextProps) => {
  const numberOfLines = typeof truncate === 'number' ? truncate : truncate ? 1 : undefined;

  return (
    <RNText
      style={style}
      numberOfLines={numberOfLines}
      ellipsizeMode={truncate ? 'tail' : undefined}
      {...props}
    >
      {children}
    </RNText>
  );
};
