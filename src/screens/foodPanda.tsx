import React, { Fragment, useState } from "react";
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DataList from "../data/datalist";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Food = () => {

  const [data, setdata] = useState([
    { id: '1', name: 'offer', image: require('../assets/image1.jpg') },
    { id: '2', name: 'Nice Resturant', image: require('../assets/image2.jpg') },
    { id: '3', name: 'food', image: require('../assets/image3.jpg') },
    { id: '4', name: 'ittem', image: require('../assets/image4.jpg') },
    { id: '5', name: 'slogan', image: require('../assets/image5.jpg') },
    { id: '6', name: 'item1', image: require('../assets/image6.jpg') },
    { id: '7', name: 'Good', image: require('../assets/image7.jpg') },
    { id: '8', name: 'Hello', image: require('../assets/image8.jpg') },
    { id: '9', name: 'Item2', image: require('../assets/image9.jpg') },
    { id: '10', name: 'Junk', image: require('../assets/image10.jpg') },
    { id: '11', name: 'Kolson', image: require('../assets/image11.jpg') },
    { id: '12', name: 'Livana', image: require('../assets/image12.jpg') },
    { id: '13', name: 'Mangoes', image: require('../assets/image13.jpg') },
    { id: '14', name: 'Nestep', image: require('../assets/image14.jpg') },
    { id: '50', name: 'Orange', image: require('../assets/image15.jpg') },
    { id: '16', name: 'Pineaplle', image: require('../assets/image16.jpg') },
  ])

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [restaurantData, setRestaurantData] = useState(DataList);
const navigation: any = useNavigation();

  const handleSearch = (text: string) => {
    setSearchValue(text);
    if (text === '') {
      setFilteredData(data);
      setRestaurantData(DataList);
    } else {
      const newData = data.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      const newRestaurantData = DataList.filter(item =>
        item.heading.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
      setRestaurantData(newRestaurantData);
    }
  };
  // Custome icon for drawwr navigation.
  
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: '#e21a70' }} />
      <SafeAreaView >
        <View style={styles.mainhead}>
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
                <FontAwesome5 name="bars" size={22} color="white"  />
              </TouchableOpacity>

              <FontAwesome5 name='map-marker-alt' size={20} color='white' />
              <View style={styles.Gviewtext}>
                <Text style={styles.t1}>65 Ghalib Road </Text>
                <Text style={styles.t2}>Lahore</Text>
              </View>
            </View>
            <FontAwesome5 name="opencart" size={20} color='white' />
          </View>
          <View style={styles.v3}>
            <FontAwesome5 name='search' size={18} color='grey' style={{ marginRight: 8 }} />
            <TextInput

              style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10, color: 'black' }}
              value={searchValue}
              onChangeText={handleSearch}
              placeholder="Search for Restaurants and Groceries"
              placeholderTextColor={'gray'}
            />
          </View>
        </View >

        <FlatList
          ListEmptyComponent={() =>

            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'grey' }}>
              No Item Found <FontAwesome5 name="times" size={16} color="grey" />
            </Text>
          }
          contentContainerStyle={{ paddingBottom: '62%' }}
          style={styles.flat3}
          ListHeaderComponent={() =>
            <View >
              <View style={styles.Flat1}>
                <View style={styles.itemContain}>
                  <View>
                    <FlatList style={styles.Flat1}
                      horizontal
                      data={filteredData}
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
                <View style={styles.itemContain}>
                  <View style={{ flex: 1 }}>
                    <FlatList style={styles.Flat2}
                      horizontal
                      data={filteredData}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                        <View style={styles.imgText}>
                          <Pressable>
                            {({ pressed }) => (
                              <View style={{ alignItems: 'center', transform: [{ scale: pressed ? 1 : 1 }] }}>
                                <Image
                                  source={item.image}
                                  style={[
                                    styles.flatImgs2,
                                    {
                                      borderWidth: pressed ? 3 : 0,
                                      borderColor: pressed ? 'rgba(220, 7, 89, 0.73)' : 'transparent',
                                    },
                                  ]}
                                />
                                <Text
                                  style={[
                                    styles.t4,
                                    pressed && { fontWeight: '600', color: '#000' },
                                  ]}
                                >
                                  {item.name}
                                </Text>
                              </View>
                            )}
                          </Pressable>
                        </View>
                      )}
                    />
                  </View>
                </View>

              </View>

              <Text style={styles.flat3head}>Explore Resturants</Text>

            </View>
          }
          data={restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image} style={styles.Flat3Img} />
              <View style={styles.rateHead}>
                <Text style={styles.t4all}>{item.heading}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome5 name='star' solid size={12} color='#FDAE1B' />
                  <Text style={styles.t7}>{item.rating}</Text>
                  <Text style={styles.t8}>({item.reviews}+)</Text>
                </View>
              </View>
              <Text style={styles.t5all}>{item.minTime}-{item.maxTime}.{item.currency}.{item.country}</Text>
              <Text style={styles.t6all}>from RS.{item.riderPrice} with Saver</Text>
              {item.discount ?
                (<Text style={styles.discount}>Up to {item.discount} off</Text>)
                : null}
            </View>
          )}

        />

      </SafeAreaView>
    </Fragment>
  );
};
export default Food;
const styles = StyleSheet.create({
  mainhead: {
    // flex:1,
    backgroundColor: '#e21a70',
    // padding: 12,
    paddingBottom: 38,
    marginTop: '-15%'
  },
  headimg: {
    width: 18,
    height: 18,
    padding: 8
  },
  v1: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,

  },
  v2: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  Gviewtext: {
    paddingLeft: 8
  },
  v3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '95%',
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
    // marginTop: -2,
  },
  Flat1: {
    // flex:1,
    // backgroundColor: 'white',
  },
  itemContain: {

    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 5,
    // paddingBottom:8,
    // marginTop: ,
    // borderRadius: 18
  },
  Flat2: {
    // marginTop:-8,
    // borderRadius: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
  },
  flatImgs1: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  flatImgs2: {
    width: 58,
    height: 60,
    borderRadius: 20,
  },
  imgText: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    // backgroundColor:'red'
  },
  hoveredImg: {
    borderBlockColor: 'black',
    borderWidth: 3,
  },
  hoveredText: {
    fontWeight: '600',

  },
  t3: {
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 12,
    maxWidth: 90,
    textAlign: 'center'
  },
  t4: {

    paddingTop: 12,
    maxWidth: 70,
    textAlign: 'center'
  },
  flat3: {
    // height:'100%',
    marginTop: '-3%',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18
  },
  Flat3Img: {
    width: '100%',
    borderRadius: 15,
  },
  flat3head: {
    fontSize: 23,
    fontWeight: '800',
    paddingBottom: 18,
  },
  t4all: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 3,
  },
  t5all: {
    color: 'grey',
    paddingBottom: 3,
  },
  t6all: {
    color: 'grey',
    paddingBottom: 3,
  },
  discount: {
    fontWeight: '600',
    color: '#e21a70',
    backgroundColor: "#FBDDDC",
    alignSelf: 'flex-start',
    padding: 3,
    marginBottom: 15,
    borderRadius: 8
  },
  rateHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  t7: {
    fontWeight: '500'
  },
  t8: {
    color: 'grey'
  }
});