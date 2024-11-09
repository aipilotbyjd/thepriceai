import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Screen } from '~/components/Screen';
import { FontAwesome } from '@expo/vector-icons';

const alertsData = [
  {
    id: '1',
    message: 'Price drop on Electronics!',
    time: '2 hours ago',
  },
  {
    id: '2',
    message: 'New deals available in Fashion.',
    time: '1 day ago',
  },
  {
    id: '3',
    message: 'Exclusive offers on Groceries.',
    time: '3 days ago',
  },
];

export default function AlertsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex-row items-center p-4 bg-white rounded-lg shadow mb-4">
      <FontAwesome name="bell" size={24} color="#fc8019" />
      <View className="ml-4 flex-1">
        <Text className="text-md font-medium text-secondary">{item.message}</Text>
        <Text className="text-sm text-gray-400">{item.time}</Text>
      </View>
      <FontAwesome name="chevron-right" size={16} color="#7a7e8e" />
    </TouchableOpacity>
  );

  return (
    <Screen>
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-secondary mb-6">Your Alerts</Text>
        <FlatList
          data={alertsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <View className="items-center justify-center flex-1">
              <Text className="text-gray-600">No alerts available.</Text>
            </View>
          }
        />
      </View>
    </Screen>
  );
} 