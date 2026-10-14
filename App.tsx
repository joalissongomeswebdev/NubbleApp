import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text preset="headingMedium" italic>
          Hello world
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
