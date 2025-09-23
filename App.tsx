/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { Image, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   SafeAreaView,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
// import Cat from './src/screens/cat';
// import Dog from './src/screens/dog';
// import Rat from './src/screens/rat'

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//     <View style={styles.container}>
//       <Text
//           style={{
//             color:'gold',
//             fontSize:25,
//             fontWeight:'bold',
//             marginBottom:15,
//           }}
//           >Awais Abdali here!</Text>
//       <Cat />
//       <Dog />
//       <Rat />
//        </View>
//       </SafeAreaView>
//       </SafeAreaProvider>
   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems:'center',
//     },
// });

// export default App;
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Cat from './src/screens/cat';
import Dog from './src/screens/dog';
import Rat from './src/screens/rat';
import { HeaderShownContext, HeaderTitle } from '@react-navigation/elements';
import { forceTouchHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler';
import Food from './src/screens/foodPanda';


// Define all routes and their params
type RootStackParamList = {
  Home: undefined;
  Cat:  undefined;
  Dog:  undefined;
  Rat:  undefined;
  Food: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome Awais!</Text>
      <Button title="Go to Cat"  onPress={() => navigation.navigate('Cat')} />
      <Button title="Go to Dog"  onPress={() => navigation.navigate('Dog')} />
      <Button title="Go to Rat"  onPress={() => navigation.navigate('Rat')} />
      <Button title="Go to Food" onPress={() => navigation.navigate('Food')} />
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cat"  component={Cat} />
          <Stack.Screen name="Dog"  component={Dog} />
          <Stack.Screen name="Rat"  component={Rat} />
          <Stack.Screen name="Food" component={Food} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


