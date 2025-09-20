/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Cat from './src/screens/cat';
import Dog from './src/screens/dog';
import Rat from './src/screens/rat'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text
          style={{
            color:'gold',
            fontSize:25,
            fontWeight:'bold',
            marginBottom:15,
          }}
          >Awais Abdali here!</Text>
      <Cat />
      <Dog />
      <Rat />
       </View>
      </SafeAreaView>
      </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
});

export default App;



