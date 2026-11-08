import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';
import { View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Icon } from './src/components/Icon/Icon';
import { Box } from './src/components/Box/Box';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
            <Text preset="headingLarge" italic>
              Coffstack
            </Text>

            <Box flexDirection="row">
              <Icon name="arrowLeft" color="primary" size={36} />
              <Icon name="arrowRight" color="primary" size={36} />
              <Icon name="bell" color="primary" size={36} />
              <Icon name="bellOn" color="primary" size={36} />
              <Icon name="bookmarkFill" color="primary" size={36} />
              <Icon name="bookmark" color="primary" size={36} />
              <Icon name="camera" color="primary" size={36} />
              <Icon name="chat" color="primary" size={36} />
              <Icon name="chatOn" color="primary" size={36} />
            </Box>

            <Box flexDirection="row">
              <Icon name="check" color="primary" size={36} />
              <Icon name="chevronRight" color="primary" size={36} />
              <Icon name="comment" color="primary" size={36} />
              <Icon name="eyeOn" color="primary" size={36} />
              <Icon name="eyeOff" color="primary" size={36} />
              <Icon name="flashOff" color="primary" size={36} />
              <Icon name="flashOn" color="primary" size={36} />
              <Icon name="heartFill" color="primary" size={36} />
              <Icon name="heart" color="primary" size={36} />
            </Box>

            <Box flexDirection="row">
              <Icon name="homeFill" color="primary" size={36} />
              <Icon name="home" color="primary" size={36} />
              <Icon name="message" color="primary" size={36} />
              <Icon name="more" color="primary" size={36} />
              <Icon name="newPost" color="primary" size={36} />
              <Icon name="profileFill" color="primary" size={36} />
              <Icon name="profile" color="primary" size={36} />
              <Icon name="search" color="primary" size={36} />
              <Icon name="send" color="primary" size={36} />
            </Box>

            <Box flexDirection="row">
              <Icon name="settings" color="primary" size={36} />
              <Icon name="trash" color="primary" size={36} />
            </Box>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
