import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// 👉 Import your actual screens
import Food from './src/screens/foodPanda';
import Cat from './src/screens/cat';
import Dog from './src/screens/dog';
import Rat from './src/screens/rat';


// Navigations
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 18,
          marginHorizontal: 20,
          borderRadius: 35,
          borderColor: '#e21a70',
          borderWidth: 1,
          elevation: 0,
        },
        tabBarActiveTintColor: '#e21a70',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="hamburger" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Cat"
        component={Cat}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="cat" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Dog"
        component={Dog}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="dog" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Rat"
        component={Rat}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="mouse" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}


// Drawer Content
function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          gap: 12,
        }}>
        <Image
          source={require('./src/assets/pandalogo.png')}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#e21a70' }}>foodPanda</Text>
          <Text style={{ fontSize: 12, color: 'grey', fontWeight: '500' }}>Take The First Bite</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


// Drawer Navigator

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // no headers anywhere
        drawerActiveTintColor:'#e21a70',
        drawerInactiveTintColor:'grey'
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      
      {/* Each drawer screen loads the same TabNavigator */}
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="home" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Food"
        component={Food}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="cocktail" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Cat"
        component={Cat}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="cat" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Dog"
        component={Dog}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="dog" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Rat"
        component={Rat}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="mouse" size={20} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}


// App Entry
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />

      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
