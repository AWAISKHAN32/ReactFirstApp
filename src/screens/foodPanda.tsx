import React, { useState } from "react";
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DataList from "../data/datalist";
const Food = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isHovered , setIsHovered] = useState(false);
  const handleMouseEnter = () =>{ setIsHovered(true); } 
  const handleMouseLeave = () => { setIsHovered(false); }
  const DATA = [
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
  ]

  
  return (
    
    <SafeAreaView style={{ flex:1 , backgroundColor:'#e21a70'}}>
      <StatusBar backgroundColor="#e21a70" barStyle="dark-content" translucent={false}/>
      <>
        <View style={styles.mainhead}>
          <View style={styles.v1}>
            <View style={styles.v2}>
              <Image style={styles.headimg} 
                   source={require("../assets/heart.png")}
                   />
              <View style={styles.Gviewtext}>
                <Text style={styles.t1}>65 Ghalib Road </Text>
              <Text style={styles.t2}>Lahore</Text>
              </View>
            </View>
            <Image style={styles.headimg}
              source={ require ("../assets/heart.png") } />
          </View>
          <View style={styles.v3}>
            <Image style={styles.headimg}
              source={require ("../assets/search.png")} />
            <TextInput
              style={{ width: '80%', }}
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="Search for restaurants here"
              placeholderTextColor={'gray'}
            />
          </View>
        </View >
        <View style={styles.Flat1}>
          <View style={styles.itemContain}>
            <View>
              <FlatList style={styles.Flat1}
                horizontal
                data={DATA}
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
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <FlatList style={styles.Flat2}
                horizontal
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.imgText}>
                    <Pressable
                              onPressIn={handleMouseEnter}
                              onPressOut={handleMouseLeave}>
                    <Image
                      source={item.image}
                      style={[styles.flatImgs2, isHovered && styles.hoveredImg]} />
                    <Text style={[styles.t4 , isHovered && styles.hoveredText]}>{item.name}</Text>
                    </Pressable>
                  </View>
                )}
              />
            </View>
          </View>

        </View>

        <FlatList
          style={styles.flat3}
          ListHeaderComponent={() => <Text style={styles.flat3head}>Explore Resturants</Text>}
          data={DataList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image} style={styles.Flat3Img} />
              <View style={styles.rateHead}>
                <Text style={styles.t4all}>{item.heading}</Text> 
              <Text>
                <Text style={styles.t7}>{item.rating}</Text>
                <Text style={styles.t8}>({item.reviews}+)</Text>     
                </Text>
              </View>
              <Text style={styles.t5all}>{item.minTime}-{item.maxTime}.{item.currency}.{item.country}</Text>
              <Text style={styles.t6all}>from RS.{item.riderPrice} with Saver</Text>
              { item.discount ?
                            ( <Text style={styles.discount}>Up to {item.discount} off</Text>)
                             : null }
            </View>
          )}
        />
      </>
    </SafeAreaView>
  );
};
export default Food;
const styles = StyleSheet.create({
  mainhead: {
    // flex:1,
    backgroundColor: '#e21a70',
    // padding: 12,
    paddingBottom: 38
  },
  headimg: {
    width: 18,
    height: 18,
    padding:8
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
    alignItems:'center',
  },
  Gviewtext:{
       paddingLeft:8
  },
  v3: {
    // display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '93%',
    borderRadius: 22,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 'auto',
  },
  t1: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  t2: {
    color: 'white',
    fontSize: 12,
    marginTop:-2,
  },
  Flat1: {
    // flex:1,
    backgroundColor: 'white',
  },
  itemContain: {
        
    flexDirection:'row',
    backgroundColor: 'white',
    padding:18,
    marginTop: -15
  },
  Flat2: {

    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',

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
  hoveredImg:{
      borderBlockColor:'black',
      borderWidth:3,
  },
  hoveredText:{
      fontWeight:'600',

  },
  t3: {
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 12,
    maxWidth: 90,
    textAlign: 'center'
  },
  t4:{
    
    paddingTop: 12,
    maxWidth: 70,
    textAlign: 'center'
  },
  flat3: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  Flat3Img: {
    width: '100%',
    borderRadius: 15,
  },
  flat3head: {
    fontSize: 23,
    fontWeight: '800',
    paddingBottom:18,
  },
  t4all: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom:3,
  },
  t5all: {
    color: 'grey',
    paddingBottom:3,
  },
  t6all: {
    color: 'grey',
    paddingBottom:3,
  },
  discount:{
         fontWeight:'600',
         color:'#e21a70',
         backgroundColor:"#FBDDDC",
         alignSelf:'flex-start',
         padding:3,
         marginBottom:8,
         borderRadius:8
  },
  rateHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  t7:{
    fontWeight:'500'
  },
  t8:{
    color:'grey'
  }
});