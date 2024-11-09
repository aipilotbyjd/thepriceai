import { View, Text } from 'react-native';
import { Screen } from '~/components/Screen';

export default function TopDealsScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold">Top Deals</Text>
      </View>
    </Screen>
  );
} 