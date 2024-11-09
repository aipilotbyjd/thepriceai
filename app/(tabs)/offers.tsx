import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function OffersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Offers' }} />
      <View className="flex-1 items-center justify-center">
        <Text>Offers Screen</Text>
      </View>
    </>
  );
} 