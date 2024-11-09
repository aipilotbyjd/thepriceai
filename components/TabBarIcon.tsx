import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '~/constants/theme';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
  label: string;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center pt-2">
      <FontAwesome5 
        size={SIZES.tabIcon}
        className="mb-1"
        color={props.focused ? COLORS.primary : COLORS.gray[400]}
        {...props} 
      />
      <Text 
        className={`text-xs font-medium ${
          props.focused ? 'text-primary' : 'text-gray-400'
        }`}
      >
        {props.label}
      </Text>
    </View>
  );
};
