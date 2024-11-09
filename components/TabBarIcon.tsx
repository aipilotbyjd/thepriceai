import Octicons from '@expo/vector-icons/Octicons';
import { View } from 'react-native';
import { SIZES } from '~/constants/theme';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Octicons>['name'];
  color: string;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center pt-2">
      <Octicons size={SIZES.tabIcon} className="mb-1" {...props} />
    </View>
  );
};
