import { View, Text, FlatList, Image } from 'react-native';
import { Screen } from '~/components/Screen';

const trendingData = [
  {
    id: '1',
    name: 'Trending Product 1',
    price: '$149.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Trending Product 2',
    price: '$89.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Trending Product 3',
    price: '$199.99',
    image: 'https://via.placeholder.com/150',
  },
];

export default function TrendingScreen() {
  const renderItem = ({ item }) => (
    <View className="flex-row items-center p-4 bg-gray-50 rounded-lg mb-4">
      <Image source={{ uri: item.image }} className="w-16 h-16 rounded-lg" />
      <View className="ml-4 flex-1">
        <Text className="text-lg font-semibold text-secondary">{item.name}</Text>
        <Text className="text-primary font-bold">{item.price}</Text>
      </View>
    </View>
  );

  return (
    <Screen>
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-secondary mb-6">Trending Products</Text>
        <FlatList
          data={trendingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </Screen>
  );
} 