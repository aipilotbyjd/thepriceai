import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function AccountScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Account' }} />
      <View className="flex-1 items-center justify-center">
        <Text>Account Screen</Text>
      </View>
    </>
  );
}
