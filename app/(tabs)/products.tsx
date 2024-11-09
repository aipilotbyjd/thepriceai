import { View, Text } from 'react-native';
import { Screen } from '~/components/Screen';

export default function ProductsScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-secondary">Products</Text>
      </View>
    </Screen>
  );
} 