import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    SoraBold: require('./assets/Sora-Bold.ttf'),
    Soramid: require('./assets/Sora-Regular.ttf'),
    Soraxxl: require('./assets/Sora-ExtraBold.ttf'),
    flamabold: require('./assets/Flama-Bold.otf'),
    poppins: require('./assets/fonts/Poppins-Light.ttf')
  });

  if (!fontsLoaded) {
    // Handle the case where the fonts are not yet loaded
    return null; // Or display a loading indicator
  }
  return (
  
<StackNavigator/>

  );
}


