import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Modal, StatusBar, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import fetchStars from "../components/fetchStars"
import RatingStars from "../components/fetchStars";
import DataList from "../data/datalist";
const image = { uri: 'https://reactnative.dev/img/tiny_logo.png' };
const Cat = () => {
const [orderType,setOrderType]=useState('delivery');
const [searchValue, setSearchValue] = useState('');
 const [restaurantData, setRestaurantData] = useState(DataList);
const toggleSwitch =() =>{
  setOrderType(orderType == 'delivery'?'pick-up':'delivery');
}
  return (
    
    <View style={{flex:1, backgroundColor:'white'}}>
  <View>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
    <Image
     source={require("../assets/image5.jpg")}
     style={{width:'100%'}}
     />
     <Text style={{textAlign:'center',fontSize:18,fontWeight:'600',paddingVertical:12}}>Hello Your Food</Text>
     <Text style={{textAlign:'center',}}>
     <RatingStars rating={3.5}  />
       <Text style={{fontWeight:'600'}}> 3.8(300+rating)</Text>
     </Text>
  </View>
  <View style={{flexDirection:'row',borderWidth:1,borderRadius:8,marginHorizontal:18,padding:20,marginVertical:8}}>
     <View style={styles.container1}>
      {/* Delivery Button */}
      <TouchableOpacity
        style={[
          styles.button,
          orderType === 'delivery' && styles.activeButton,
        ]}
        onPress={() => setOrderType('delivery')}>
        <FontAwesome5Icon
          name="truck"
          size={16}
          color={orderType === 'delivery' ? '#000' : 'grey'}
        />
        
      </TouchableOpacity>

      {/* Pickup Button */}
      <TouchableOpacity
        style={[
          styles.button,
          orderType === 'pickup' && styles.activeButton,
        ]}
        onPress={() => setOrderType('pickup')}>
        <FontAwesome5Icon
          name="shopping-bag"
          size={16}
          color={orderType === 'pickup' ? '#000' : 'grey'}
        />
       
      </TouchableOpacity>
    </View>
    
    <View style={{flexDirection:'column', width:'80%',paddingHorizontal:8}}>
    <Text style={{fontSize:16,fontWeight:'600'}}>Delivery 20-45 min</Text>
    <Text style={{color:'grey'}}>Rs 129.00 delivery or Rs 109.00 with Savour '
      Min order Rs 249.00
    </Text>
    </View>
    <Text style={{position:'absolute',right:20, top:12,color:'grey',fontWeight:'bold'}}>change</Text>

  </View>
<View
  style={styles.sub1}>
  
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View
      style={styles.sub2}>
      <FontAwesome5Icon name="crown" size={14} color={'#fff'} />
      <Text style={{ color: 'white', fontWeight: '700', marginLeft: 4 }}>
        Pro
      </Text>
    </View>

    <Text style={{ fontSize: 16, fontWeight: '600' }}>
      Subscribe foodPanda
    </Text>
  </View>

  <Text style={{ marginTop: 4 }}>
    We are here to give you the best services. You matter to us.
  </Text>
</View>

<View style={styles.inputtext}>
  <FontAwesome name='search' size={20} color={'grey'} style={{marginLeft:-12}}/>
  <TextInput 
  style={{width:'80%',color:'black',paddingHorizontal:18}}
    placeholder="Search here"
    placeholderTextColor={'grey'}
    value={searchValue}
    />
</View>
<FlatList
   horizontal
   data={DataList}
   keyExtractor={(item) => item.id}
   renderItem={({item})=>(
    <Text style={{fontSize:18,paddingHorizontal:12}}>{item.heading}</Text>
   )}
   style={{borderBottomColor:'black',borderWidth:1,borderTopColor:'black'}}
   />
      </View>
  );
}
const styles = StyleSheet.create({
 
  container1: {
    flexDirection: 'row',
    backgroundColor: '#a6a2a219',
    borderRadius:25,
    justifyContent: 'space-between',
    // margin:'auto',
    width:70,
    height:35,

  },
  button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    margin:4,
  },
  activeButton: {
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:0.5,
  },
  sub1:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'rgba(234, 96, 249, 0.38)',
    marginHorizontal: 18,
    padding: 16,
  },
  sub2:{
     flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(237, 45, 131, 0.94)',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 6,
  },
  inputtext:{flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:18,
    marginHorizontal:18,
    backgroundColor:'white',
    borderRadius:22,
    borderColor:'black',
    borderWidth:1}

});

export default Cat;