import { useState, useRef, useEffect } from 'react';
import { ScrollView, LayoutChangeEvent } from 'react-native';

export const useHeader = (activeTab?: string) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const scrollViewRef = useRef<ScrollView>(null);
  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({});

  useEffect(() => {
    const activeLayout = tabLayouts.current[activeTab || ''];
    const canScrollToTab = !!activeLayout && !!scrollViewRef.current && layout.width > 0;

    if (canScrollToTab) {
      const { x, width: tabWidth } = activeLayout!;
      const centeredScrollX = x - (layout.width / 2) + (tabWidth / 2);

      scrollViewRef.current!.scrollTo({
        x: Math.max(0, centeredScrollX),
        animated: true
      });
    }
  }, [activeTab, layout.width]);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const onTabLayout = (tab: string, x: number, width: number) => {
    tabLayouts.current[tab] = { x, width };
  };

  return {
    layout,
    scrollViewRef,
    onLayout,
    onTabLayout,
  };
};
