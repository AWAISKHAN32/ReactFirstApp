import * as React from 'react';
import { Button, Text, View, StyleSheet, StatusBar, Image } from 'react-native';
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
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';



// // Define all routes and their params
// type RootStackParamList = {
//   Home: undefined;
//   Cat: undefined;
//   Dog: undefined;
//   Rat: undefined;
//   Food: undefined;
// };

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
        <Tab.Navigator screenOptions={{headerShown:false,
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
  );
}

const DrawerNavigator = () => {
  return(
      <Drawer.Navigator screenOptions={{headerShown:false}}
       drawerContent={(props) => (
        <CustomDrawer {...props}/>
      )}
      >
         <Drawer.Screen name="Home" component={TabNavigator}
         options={{
           drawerActiveTintColor:'#e21a70',
          drawerInactiveTintColor:'grey',
          drawerIcon: ({size, color,focused }) => (
            <FontAwesome5Icon name="home" size={20} color={focused ? '#e21a70': 'grey'} /> )}} 
            />
        <Drawer.Screen name="Food" component={Food} 
        options={{
          drawerActiveTintColor:'#e21a70',
          drawerInactiveTintColor:'grey',
          drawerIcon: ({size, color,focused }) => (
            <FontAwesome5Icon name="hamburger" size={20} color={focused ? '#e21a70': 'grey'}/> )}}
            />
        <Drawer.Screen name="Cat" component={Cat}
        options={{
          drawerActiveTintColor:'#e21a70',
          drawerInactiveTintColor:'grey',
          drawerIcon: ({ size,color,focused }) => (
            <FontAwesome5Icon name="cat" size={20} color={focused ? '#e21a70': 'grey'}/> )}}
             />
        <Drawer.Screen name="Dog" component={Dog}
         options={{
          drawerActiveTintColor:'#e21a70',
          drawerInactiveTintColor:'grey',
          drawerIcon: ({size, color ,focused }) => (
            <FontAwesome5Icon name="dog" size={20} color={focused ? '#e21a70': 'grey'}/> )}}
            />
        <Drawer.Screen name="Rat" component={Rat} 
        options={{
          drawerActiveTintColor:'#e21a70',
          drawerInactiveTintColor:'grey',
          drawerIcon: ({size, color,focused }) => (
            <FontAwesome5Icon name="mouse" size={20} color={focused ? '#e21a70': 'grey'}/> )}}
            />
      </Drawer.Navigator>
  );
}
function CustomDrawer(props:any) {  
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection:'row',alignItems:'center',gap:12,paddingLeft:5}}>
        <Image source={require("../ToDo/src/assets/pandalogo.png")}  style={{width:70,height:70,borderRadius:50}} />
        <View>
          <Text style={{fontSize:18,fontWeight:'600',color:'#e21a70'}}>foodPanda</Text>
          <Text style={{fontSize:12,color:'grey',fontWeight:'500'}}>Take The First Bite</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
        
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
