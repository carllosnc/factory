import { StyleSheet, Platform, StatusBar } from 'react-native';
import { spacing, ThemeColors } from '../factory';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0;

export const styles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    paddingTop: STATUS_BAR_HEIGHT,
    width: '100%',
    overflow: 'hidden',
  },
  inner: {
    paddingTop: spacing.s7,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s8,
    marginBottom: spacing.s6,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: spacing.s5,
    marginLeft: -spacing.s5,
    padding: spacing.s5,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: spacing.s5,
    padding: spacing.s5,
  },
  tabScroll: {
    marginTop: spacing.s5,
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s5,
  },
  tabList: {
    flexDirection: 'row',
    gap: spacing.s5,
  },
  tab: {
    paddingHorizontal: spacing.s8,
    paddingVertical: spacing.s5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  tabText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
});
