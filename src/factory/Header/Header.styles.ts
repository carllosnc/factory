import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors, spacing, uiColors } from '../factory';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0;

export const styles = StyleSheet.create({
  container: {
    paddingTop: STATUS_BAR_HEIGHT,
    width: '100%',
    overflow: 'hidden',
  },
  inner: {
    paddingTop: spacing.s4,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s5,
    marginBottom: spacing.s3,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: spacing.s2,
    marginLeft: -spacing.s2,
    padding: spacing.s2,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: uiColors.common.white,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: spacing.s2,
    padding: spacing.s2,
  },
  tabScroll: {
    marginTop: spacing.s2,
    paddingHorizontal: spacing.s2,
    paddingBottom: spacing.s2,
  },
  tabList: {
    flexDirection: 'row',
    gap: spacing.s2,
  },
  tab: {
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  tabText: {
    color: uiColors.common.white,
    fontSize: 13,
    fontWeight: '600',
  },
});

export const HEADER_GRADIENT = [
  colors.primary.t500, colors.primary.t800
];
