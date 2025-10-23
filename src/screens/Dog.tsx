import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { ActivityIndicator, Alert, Button, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import DataList from "../data/datalist";

const Dog = () => {
  const navigation: any = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [showAll, setShowAll] = useState(false);

// Only show 4 items if not expanded
  const visibleData = showAll ? DataList : DataList.slice(0, 4);
  const remainingCount = DataList.length - visibleData.length;
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: '#e21a70' }} />
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
        <ScrollView>
        <View style={styles.container}>
          {/* flatlist 1 */}
          <View style={styles.flat1}>
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
                 scrollEnabled={false}
              />
            </View>
          </View>

          {/* flatlist 2 */}
          <View style={styles.flat2}>
            <View>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 12, paddingVertical: 12 }}>Popular</Text>
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
                    <Text style={{ color: 'grey', fontWeight: 'bold' }}>{item.minTime}-{item.maxTime}</Text>
                  </View>
                )}
                 scrollEnabled={false}
              />
            </View>
          </View>

          {/* flatlist 3 */}
          <View style={styles.flat3}>
            <View>
              {/* <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 12, paddingVertical: 12 }}>Popular</Text> */}
              <FlatList
              ListHeaderComponent={
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 12, paddingVertical: 12 }}>Popular</Text>
              }
                data={visibleData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.flat3item}>
                    <Image
                      source={item.image}
                      style={styles.flatImgs1} />
                    <View style={styles.flat3text}>
                      <Text style={styles.flat3headtext}>{item.heading}</Text>
                      <Text style={{ color: 'grey', fontWeight: 'bold' }}>{item.minTime}-{item.maxTime}</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "grey" }}>
                          Rs {item.price} or free with
                        </Text>
                        <View style={styles.sub1}>
                          <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.sub2}>
                              <FontAwesome5Icon name="crown" size={14} color="#fff" />
                              <Text style={{ color: "white", fontWeight: "700", marginLeft: 4 }}>
                                Pro
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                     {/* <Text style={styles.discount}>{item.discount} Discount</Text> */}
                    </View>
                  </View>
                )}
                //  contentContainerStyle={{ paddingBottom: '43%' }}
                  scrollEnabled={false}
              />
             {/* Expand/Collapse button */}
      {remainingCount > 0 && !showAll && (
        <TouchableOpacity onPress={() => setShowAll(true)} style={styles.button}>
          <Text style={styles.buttonText}>+{remainingCount} more</Text>
        </TouchableOpacity>
      )}

      {showAll && (
        <TouchableOpacity onPress={() => setShowAll(false)} style={styles.button}>
          <Text style={styles.buttonText}>Show less</Text>
        </TouchableOpacity>
      )}
            </View>
          </View>
        </View>
</ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 23,
    marginTop: '-3%',
   
  },
  header: {
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
  flat1: {
    // backgroundColor: 'red',
    // paddingVertical:4,
    paddingHorizontal: 4,

  },
  flat2: {
    // backgroundColor: 'green',
    // paddingTop:8,
    paddingHorizontal: 4,
  },
  flat3: {
    paddingHorizontal: 12,
    marginBottom:100,
    paddingBottom:125,
  },
  flat3item: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  flat3text: {
    paddingHorizontal: 12,
    // paddingVertical:12,
  },
  flat3headtext: {
    fontSize: 15,
    fontWeight: '500',
    // paddingTop: 8,

    // textAlign: 'center'
  },
   sub1: {
  paddingLeft:8
   },
  sub2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(237, 45, 131, 0.94)",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
  },
  // discount:{
  //    borderWidth: 1,
  //   borderColor: "black",
  //   borderRadius: 8,
  //   backgroundColor: "rgba(229, 81, 246, 0.64)",
  //   // marginHorizontal: 18,
  //   // padding: 16,
  // },
  flatImgs1: {
    width: 80,
    height: 80,
    borderRadius: 22,
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
   button: {
    // alignSelf: "center",
    width:'25%',
    // marginVertical: 10,
    backgroundColor: "#ddd",
    paddingVertical:6,
    paddingHorizontal: 10,
    borderColor:'black',
    borderWidth:1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#333",
    fontWeight: "600",
  },
});

export default Dog;
