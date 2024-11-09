import { View, Text, TextInput } from 'react-native';
import { Screen } from '~/components/Screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '~/constants/theme';

export default function SearchScreen() {
  return (
    <Screen>
      {/* Search Input */}
      <View className="py-4">
        <View className="flex-row items-center bg-gray-50 rounded-full px-4 py-2">
          <FontAwesome5 name="search" size={20} color={COLORS.gray[400]} />
          <TextInput 
            placeholder="Search products..."
            className="flex-1 ml-3 text-base"
            placeholderTextColor={COLORS.gray[400]}
          />
        </View>
      </View>

      {/* Recent Searches */}
      <View className="mt-6">
        <Text className="text-lg font-semibold text-secondary mb-4">
          Recent Searches
        </Text>
        {['iPhone 13', 'Nike Shoes', 'Samsung TV'].map((search) => (
          <View key={search} className="flex-row items-center py-3 border-b border-gray-100">
            <FontAwesome5 name="history" size={16} color={COLORS.gray[400]} />
            <Text className="ml-3 text-gray-600">{search}</Text>
          </View>
        ))}
      </View>

      {/* Popular Searches */}
      <View className="mt-8">
        <Text className="text-lg font-semibold text-secondary mb-4">
          Popular Searches
        </Text>
        <View className="flex-row flex-wrap">
          {['Laptops', 'Smartphones', 'Headphones', 'Smart Watch', 'Gaming'].map((tag) => (
            <View key={tag} className="bg-gray-50 rounded-full px-4 py-2 mr-2 mb-2">
              <Text className="text-gray-600">{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
} 