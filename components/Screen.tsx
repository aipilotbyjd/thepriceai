import { SafeAreaView, ScrollView, View } from 'react-native';

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  padding?: boolean;
};

export const Screen = ({ children, scrollable = true, padding = true }: ScreenProps) => {
  const Container = scrollable ? ScrollView : View;
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Container className={`flex-1 ${padding ? 'px-4' : ''}`}>
        {children}
      </Container>
    </SafeAreaView>
  );
}; 