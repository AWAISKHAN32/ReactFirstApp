import * as React from 'react';
import { Button, Text, View, StyleSheet, StatusBar } from 'react-native';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


// // Define all routes and their params
// type RootStackParamList = {
//   Home: undefined;
//   Cat: undefined;
//   Dog: undefined;
//   Rat: undefined;
//   Food: undefined;
// };

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <GestureHandlerRootView>
      
      <NavigationContainer>
        <View style={{flex:1}}>
        <Tab.Navigator screenOptions={{headerShown: false,
          tabBarStyle:{
            position:'absolute',
            bottom:18,
            marginHorizontal:20,
            borderRadius:35,
            borderColor:'red',
            borderWidth:1,
            elevation:0,
          },
        }}
          >
          <Tab.Screen name="Food" component={Food} 
          options={{
             tabBarActiveTintColor:'#e21a70',
             tabBarInactiveTintColor:'grey',
              tabBarIcon:({size, color,focused})=>(
                <FontAwesome5Icon name="hamburger" size={20} color={focused ? '#e21a70' : 'grey'} />
          ),
          }}
           />
          <Tab.Screen name="Cat"  component={Cat }
          options={{
             tabBarActiveTintColor:'#e21a70',
             tabBarInactiveTintColor:'grey',
              tabBarIcon:({size, color, focused})=>(
                <FontAwesome5Icon name="cat" size={20}  color={focused ? '#e21a70' : 'grey'} />
          ),
          }}
          />
          <Tab.Screen name="Dog"  component={Dog } 
          options={{
             tabBarActiveTintColor:'#e21a70',
             tabBarInactiveTintColor:'grey',
              tabBarIcon:({size, color,focused})=>(
                <FontAwesome5Icon name="dog" size={20}  color={focused ? '#e21a70' : 'grey'} />
          ),
          }}
          />
          <Tab.Screen name="Rat"  component={Rat }
          options={{
            tabBarInactiveTintColor:'grey',
            tabBarActiveTintColor:'#e21a70',
              tabBarIcon:({size, color,focused})=>(
                <FontAwesome5Icon name="mouse" size={20}  color={focused ? '#e21a70' : 'grey'} />
          ),
          }}
          />

        </Tab.Navigator>
      </View>
      </NavigationContainer>
    
    </GestureHandlerRootView>
  );
}


