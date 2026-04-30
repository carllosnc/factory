import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Slider, spacing, useTheme, Text, Page, typography } from '../factory';

export const SlidersScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(75);

  return (
    <Page
      scrollable
      contentContainerStyle={styles.content}
      header={
        <Header
          title="Sliders"
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.section}>
        <Text style={{ fontSize: typography.lg, fontWeight: '700', color: colors.foreground, marginBottom: spacing.s5 }}>Custom Slider</Text>
        <Text style={{ fontSize: typography.sm, color: colors.muted, marginBottom: spacing.s7 }}>
          A premium Skia-powered slider with haptic feedback and dynamic labels.
        </Text>
        
        <View style={styles.sliderContainer}>
          <Text style={{ fontWeight: '500', color: colors.foreground, marginBottom: spacing.s3 }}>Volume: {value1}</Text>
          <Slider 
            value={value1} 
            onValueChange={setValue1} 
            min={0} 
            max={100} 
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={{ fontWeight: '500', color: colors.foreground, marginBottom: spacing.s3 }}>Brightness: {value2}</Text>
          <Slider 
            value={value2} 
            onValueChange={setValue2} 
            min={0} 
            max={100} 
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={{ fontWeight: '500', color: colors.foreground, marginBottom: spacing.s3 }}>Contrast: {value3}</Text>
          <Slider 
            value={value3} 
            onValueChange={setValue3} 
            min={0} 
            max={100} 
          />
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.s7,
  },
  section: {
    marginBottom: spacing.s9,
  },
  sliderContainer: {
    marginBottom: spacing.s8,
  }
});
