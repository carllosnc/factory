import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors, spacing } from '../factory';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0;

export const styles = StyleSheet.create({
  container: {
    paddingTop: STATUS_BAR_HEIGHT,
    width: '100%',
    overflow: 'hidden',
  },
  inner: {
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[6],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: spacing[2],
    marginLeft: -spacing[2],
    padding: spacing[2],
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.common.white,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: spacing[2],
    padding: spacing[2],
  },
  tabScroll: {
    paddingHorizontal: spacing[2],
  },
  tabList: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  tab: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[2],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  tabText: {
    color: colors.common.white,
    fontSize: 13,
    fontWeight: '600',
  },
});

export const HEADER_GRADIENT = [
  colors.primary[500], colors.primary[800]
];
