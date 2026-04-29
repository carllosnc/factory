import React, { useMemo } from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  SafeAreaView,
  ScrollView,
  ScrollViewProps
} from 'react-native';
import { useTheme } from '../ThemeContext';
import { createStyles } from './Page.styles';

export interface PageProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
  scrollable?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollViewProps?: Partial<ScrollViewProps>;
}

export const Page = ({
  children,
  header,
  footer,
  style,
  safe = false,
  scrollable = false,
  contentContainerStyle,
  scrollViewProps
}: PageProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const Container = safe ? SafeAreaView : View;

  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  return (
    <Container style={[styles.container, style]}>
      {header}
      <View style={{ flex: 1 }}>
        {content}
      </View>
      {footer}
    </Container>
  );
};
