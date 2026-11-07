import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
            <Text preset="headingLarge" italic>
              Coffstack
            </Text>

            <Button title="Enviar" marginBottom="s24" preset="primary" />
            <Button title="Outline" marginBottom="s24" preset="outline" />

            <Button title="Disabled" marginBottom="s24" disabled />
            <Button
              title="Disabled Outline"
              marginBottom="s24"
              preset="outline"
              disabled
            />

            <Button title="Loading" loading />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
