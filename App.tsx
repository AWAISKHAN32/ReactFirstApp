import * as React from 'react';
import { Button, Text, View,StyleSheet, StatusBar } from 'react-native';
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
      <View style={styles.buttonD}>
      <Button title="Go to Cat"  onPress={() => navigation.navigate('Cat')} />
        </View>
        <View style={styles.buttonD}>
      <Button title="Go to Dog"  onPress={() => navigation.navigate('Dog')} />
        </View>
        <View style={styles.buttonD}>
      <Button title="Go to Rat"  onPress={() => navigation.navigate('Rat')} />
        </View>
        <View style={styles.buttonD}>
      <Button title="Goto FoodPanda" onPress={() => navigation.navigate('Food')} />
        </View>
    </View>
  );
}
const styles=StyleSheet.create({
            buttonD:{
              padding:3,
              margin:5,
            }

})

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='yellow' barStyle='dark-content' translucent={false} />
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


