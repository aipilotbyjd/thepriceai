import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { COLORS, SPACING } from '~/constants/theme';
import { TabBarIcon } from '~/components/TabBarIcon';

const TAB_SCREENS = [
  {
    name: 'index',
    label: 'Home',
    icon: 'home',
  },
  {
    name: 'top-deals',
    label: 'Top Deals',
    icon: 'tag',
  },
  {
    name: 'trending',
    label: 'Trending',
    icon: 'flame',
  },
  {
    name: 'products',
    label: 'Products',
    icon: 'cube',
  },
  {
    name: 'alerts',
    label: 'Alerts',
    icon: 'bell',
  },
  {
    name: 'account',
    label: 'Account',
    icon: 'person',
  },
] as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? SPACING.tabBarHeight.ios : SPACING.tabBarHeight.android,
          paddingBottom:
            Platform.OS === 'ios' ? SPACING.tabBarPadding.ios : SPACING.tabBarPadding.android,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray[100],
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray[400],
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTitleStyle: {
          color: COLORS.secondary,
          fontWeight: 'bold',
        },
      }}>
      {TAB_SCREENS.map(({ name, label, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: label,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={icon} color={color} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
