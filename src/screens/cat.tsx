import React, { useState, useRef } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RatingStars from "../components/fetchStars";
import DataList from "../data/datalist";

const Cat = () => {
  const [orderType, setOrderType] = useState('delivery');
  const [searchValue, setSearchValue] = useState('');
  const [restaurantData, setRestaurantData] = useState(DataList);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSticky, setIsSticky] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    setOrderType(orderType == 'delivery' ? 'pick-up' : 'delivery');
  }

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      listener: (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const searchSectionTop = 400;
        setIsSticky(offsetY > searchSectionTop);
      },
      useNativeDriver: false,
    }
  );

  const SearchAndCategories = ({ sticky = false }) => (
    <View style={[sticky ? styles.stickySearchSection : styles.normalSearchSection]}>
      <View style={styles.inputtext}>
        <FontAwesome name='search' size={20} color={'grey'} style={{marginLeft:-12}}/>
        <TextInput 
          style={{width:'80%',color:'black',paddingHorizontal:18}}
          placeholder="Search here"
          placeholderTextColor={'grey'}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
      <View>
        <FlatList
          horizontal
          data={DataList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item.heading;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item.heading)}
                style={[
                  {
                    paddingHorizontal: 10,
                    borderBottomWidth: isActive ? 3 :0,
                    borderColor: isActive ? '#0d0308ff' :'',
                  },
                ]}
              >
                <Text style={{ 
                  color: isActive ? 'black' : '#858282ff', 
                  fontWeight: isActive ? '700' : '500',
                }}>
                  {item.heading}
                </Text>
              </TouchableOpacity>
            );
          }}
          style={{ marginTop: 12, height:30 }}
        />
      </View>
    </View>
  );

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
      
      {isSticky && (
        <View style={styles.stickyContainer}>
          <SearchAndCategories sticky={true} />
        </View>
      )}
      
      <FlatList
        data={DataList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <View>
            <View style={styles.headerImageContainer}>
              <Image
                source={require("../assets/image5.jpg")}
                style={styles.headerImage}
              />
              <View style={styles.headerContent}>
                <Text style={styles.headerTitle}>Hello Your Food</Text>
                <Text style={styles.headerRating}>
                  <RatingStars rating={3.5}  />
                  <Text style={{fontWeight:'600'}}> 3.8(300+rating)</Text>
                </Text>
              </View>
            </View>

            <View style={{flexDirection:'row',borderWidth:1,borderRadius:8,marginHorizontal:18,padding:20,marginVertical:8}}>
              <View style={styles.container1}>
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
                <Text style={{color:'grey'}}>Rs 129.00 delivery or Rs 109.00 with Savour ' Min order Rs 249.00</Text>
              </View>
              <Text style={{position:'absolute',right:20, top:12,color:'grey',fontWeight:'bold'}}>change</Text>
            </View>

            <View style={styles.sub1}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.sub2}>
                  <FontAwesome5Icon name="crown" size={14} color={'#fff'} />
                  <Text style={{ color: 'white', fontWeight: '700', marginLeft: 4 }}>Pro</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Subscribe foodPanda</Text>
              </View>
              <Text style={{ marginTop: 4 }}>We are here to give you the best services. You matter to us.</Text>
            </View>

            {!isSticky && <SearchAndCategories />}

            <Text style={styles.header}>Popular</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <TouchableOpacity style={styles.addButton} onPress={()=>{}}>
                <FontAwesome5Icon name="plus" size={14} color="#070707ff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemName}>{item.heading}</Text>
            <Text style={styles.itemPrice}>Rs {item.price}</Text>
          </View>
        )}
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
  inputtext:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:18,
    marginHorizontal:18,
    backgroundColor:'white',
    borderRadius:22,
    borderColor:'black',
    borderWidth:1
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
   paddingBottom:100
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  addButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#f9f8f8ff',
    borderRadius: 20,
    padding: 8,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  normalSearchSection: {
  },
  stickyContainer: {
    position: 'absolute',
    top: 0, // Changed from StatusBar.currentHeight to 0
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    elevation: 5,
    paddingTop: StatusBar.currentHeight, // Add padding instead of top position
  },
  stickySearchSection: {
    backgroundColor: 'white',
  },
  headerImageContainer: {
    marginTop: -StatusBar.currentHeight,
  },
  headerImage: {
    width: '100%',
    height: 250, // Increased height to cover more area
  },
  headerContent: {
    marginTop: -StatusBar.currentHeight, // Pull content up
    paddingTop: StatusBar.currentHeight + 10, // Add padding to push content below status bar
  },
  headerTitle: {
    textAlign:'center',
    fontSize:18,
    fontWeight:'600',
    paddingVertical:12
  },
  headerRating: {
    textAlign:'center',
  },
});

export default Cat;