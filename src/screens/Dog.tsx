import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import DataList from "../data/datalist";

const Dog = () => {
  const navigation: any = useNavigation();
  const [searchValue, setSearchValue] = useState('');


  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor:'#e21a70'}} />
      <SafeAreaView >
        <View style={styles.header}>
          <View style={styles.v1}>
            <View style={styles.v2}>
              <TouchableOpacity
                onPress={() => {
                  // Safely open drawer from nested navigator
                  const parent = navigation.getParent();
                  if (parent && parent.openDrawer) {
                    parent.openDrawer();
                  } else {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }
                }}
                style={{ paddingRight: 8 }}
                activeOpacity={0.5}
              >
                <FontAwesome5Icon name="bars" size={22} color="white" />
              </TouchableOpacity>

              <FontAwesome5Icon name='map-marker-alt' size={20} color='white' />
              <View style={styles.Gviewtext}>
                <Text style={styles.t1}>65 Ghalib Road </Text>
                <Text style={styles.t2}>Lahore</Text>
              </View>
            </View>
            <FontAwesome5Icon name="opencart" size={20} color='white' />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={styles.v3}>
              <FontAwesome5Icon name='search' size={18} color='grey' style={{ marginRight: 8 }} />
              <TextInput
                style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10, color: 'black' }}
                value={searchValue}
                onChangeText={setSearchValue}
                placeholder="Search for Restaurants and Groceries"
                placeholderTextColor={'gray'}
              />
            </View>
            <FontAwesome5Icon name='layer-group' size={20} color={'white'} style={{ paddingRight: 6 }} />
          </View>
        </View >

             {/* screen below header */}
        <View style={styles.container}>
          {/* flatlist 1 */}
          <View style={styles.Flat1}>
            <View>
              <FlatList 
                horizontal
                data={DataList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.imgText}>
                    <Image
                      source={item.image}
                      style={styles.flatImgs1} />
                    <Text style={styles.t3}>{item.name}</Text>
                  </View>
                )}
              />
            </View>
            </View>

{/* flatlist 2 */}
 <View style={styles.Flat2}>
            <View>
              <Text style={{color:'black',fontSize:20,fontWeight:'bold', paddingHorizontal:12,paddingVertical:12}}>Popular</Text>
              <FlatList 
                horizontal
                data={DataList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.imgText}>
                    <Image
                      source={item.image}
                      style={styles.flatImgs1} />
                    <Text style={styles.t3}>{item.name}</Text>
                    <Text style={{color:'grey',fontWeight:'bold'}}>{item.minTime}-{item.maxTime}</Text>
                  </View>
                )}
              />
            </View>
            </View>

            <View style={{}}>
              <Text>Heloooooooooo</Text>
            </View>
          </View>          

      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingTop:23,
    marginTop:'-3%',
  },
  header:{
    backgroundColor: '#e21a70',
    paddingBottom: 38,
    marginTop: '-15%'
  },
  headimg: {
    width: 18,
    height: 18,
    padding: 8
  },
  v1: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,

  },
  v2: {
   
    flexDirection: 'row',
    alignItems: 'center',

  },
  Gviewtext: {
    paddingLeft: 8
  },
  v3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 25,
    justifyContent: 'flex-start', // important
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15, // give some breathing room
  },
  t1: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  t2: {
    color: 'white',
    fontSize: 12,
  },
  Flat1: {
    backgroundColor:'red',
    // paddingVertical:4,
    paddingHorizontal:4,
    
  },
   Flat2: {
    backgroundColor:'green',
    // paddingTop:8,
    paddingHorizontal:4,
  },
  
  flatImgs1: {
    width: 80,
    height: 80,
    borderRadius:22,
  },
 
  imgText: {
    flex: 1,
    alignItems: 'center',
    padding: 6,
   
  },
  
  t3: {
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 8,
    maxWidth: 90,
    textAlign: 'center'
  },
});

export default Dog;
