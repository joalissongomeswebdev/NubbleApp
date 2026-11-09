import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';
import { View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
            <Text preset="headingLarge" mb="s8">
              Olá!
            </Text>

            <Text preset="paragraphLarge" mb="s40">
              Digite seu e-mail e senha para entrar
            </Text>

            <TextInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              boxProps={{ mb: 's20' }}
            />

            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              errorMessage="mensagem de erro"
              RightComponent={<Icon name="eyeOn" color="gray2" />}
              boxProps={{ mb: 's10' }}
            />

            <Text preset="paragraphSmall" bold color="primary">
              Esqueci minha senha
            </Text>

            <Button mt="s48" title="Entrar" />
            <Button mt="s12" preset="outline" title="Criar uma conta" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
