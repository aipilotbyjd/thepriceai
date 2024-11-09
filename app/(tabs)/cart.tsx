import { View, Text, Image } from 'react-native';
import { Screen } from '~/components/Screen';
import { Button } from '~/components/Button';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '~/constants/theme';

export default function CartScreen() {
  return (
    <Screen>
      {/* Cart Items */}
      <View className="flex-1">
        {[1, 2].map((item) => (
          <View key={item} className="flex-row py-4 border-b border-gray-100">
            <View className="w-20 h-20 bg-gray-50 rounded-lg" />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-medium text-secondary">Product Name</Text>
              <Text className="text-primary font-bold mt-1">$99.99</Text>
              <View className="flex-row items-center mt-2">
                <Button title="-" className="w-8 h-8 p-0" />
                <Text className="mx-4">1</Text>
                <Button title="+" className="w-8 h-8 p-0" />
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Cart Summary */}
      <View className="border-t border-gray-100 pt-4 pb-6">
        <View className="flex-row justify-between mb-4">
          <Text className="text-gray-600">Subtotal</Text>
          <Text className="font-semibold text-secondary">$199.98</Text>
        </View>
        <Button 
          title="Proceed to Checkout" 
          className="bg-primary"
        />
      </View>
    </Screen>
  );
} 