import { View, Text, Image } from 'react-native';
import { Screen } from '~/components/Screen';
import { Button } from '~/components/Button';

export default function HomeScreen() {
  return (
    <Screen>
      {/* Hero Section */}
      <View className="py-4">
        <Text className="text-3xl font-bold text-secondary">
          Find the Best Prices
        </Text>
        <Text className="mt-2 text-gray-600">
          Compare prices across multiple stores and save money on your purchases
        </Text>
      </View>

      {/* Featured Categories */}
      <View className="my-6">
        <Text className="text-xl font-semibold text-secondary mb-4">
          Popular Categories
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {['Electronics', 'Fashion', 'Groceries', 'Home'].map((category) => (
            <View key={category} className="w-[48%] bg-gray-50 rounded-lg p-4 mb-4">
              <Text className="text-lg font-medium text-secondary">{category}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Deals */}
      <View className="my-6">
        <Text className="text-xl font-semibold text-secondary mb-4">
          Recent Deals
        </Text>
        <View className="space-y-4">
          {[1, 2, 3].map((item) => (
            <View key={item} className="bg-white border border-gray-100 rounded-lg p-4">
              <Text className="text-lg font-medium text-secondary">Product Name</Text>
              <Text className="text-primary font-bold mt-2">$99.99</Text>
              <Text className="text-gray-400 text-sm">Save 20%</Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
}
