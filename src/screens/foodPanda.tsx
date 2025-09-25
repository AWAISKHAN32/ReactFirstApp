import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Food=() =>{
    const [searchValue, setSearchValue] = useState('')
    const DATA=[
      {id:'1', name:'offer', Image:{uri:"https://reactnative.dev/img/tiny_logo.png"} },
      {id:'2', name:'Nice Resturant' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'3' ,name:'food' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'4', name:'ittem' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'5',name:'slogan' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'6',name:'item1' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'7',name:'Good' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'8',name:'Hello' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
       {id:'9', name:'Item2', Image:{uri:"https://reactnative.dev/img/tiny_logo.png"} },
      {id:'10', name:'Junk' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'11' ,name:'Kolson' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'12', name:'Livana' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'13',name:'Mangoes' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'14',name:'Nestep' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'50',name:'Orange' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}},
      {id:'16',name:'Pineaplle' , Image:{uri:"https://reactnative.dev/img/tiny_logo.png"}}
    ]
    
return(
    <SafeAreaProvider>
    <SafeAreaView>
        <>
        <View style={styles.mainhead}>

       <View style={styles.v1}>
         <View style={styles.v2}>
            <Text style={styles.t1}>65 Ghalib Road </Text>
            <Text style={styles.t2}>Lahore</Text>
        </View>
              <Image style={styles.headimg}
              source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
       </View>
         
         <View style={styles.v3}>
               <Image style={styles.headimg}
              source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
            
            <TextInput 
            style={{width:'80%', }}
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="Search for restaurants here"
              placeholderTextColor={'gray'}
               />
         </View>
    </View >
          <View style={styles.itemContain}>
            <View>
              <FlatList style={styles.mainFlat}
              horizontal
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                  <View style={styles.imgText}>
                    <Image 
                    source={item.Image} 
                    style={styles.flatImgs}/>
                    <Text style={styles.t3}>{item.name}</Text>
                  </View>
              )}
              
              />
            </View>
            </View>
    </>
    </SafeAreaView>
</SafeAreaProvider>
);
};
export default Food;

const styles=StyleSheet.create({
             mainhead:{
               backgroundColor:'#e21a70',
               padding:12,
               paddingBottom:38
             },
              headimg:{
                width:18,
                height:18,
              },
              v1:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                padding:18,
                
              },
              v2:{
                display:'flex',
                flexDirection:'column',

              },
              v3:{
                   display:'flex',
                   flexDirection:'row',
                   backgroundColor:'white',
                   width:'90%',
                   borderRadius:22,
                   justifyContent:'space-evenly',
                   alignItems:'center',
                   margin:'auto',
              },
              t1:{
                 fontSize:18,
                 fontWeight:'600',
                 color:'white',
              },
              t2:{
                 color:'white',
                 fontSize:12,
              },
             itemContain:{
                backgroundColor:'white',
                borderRadius:18,
                padding:18,
                marginTop:-15
             },
             mainFlat:{
                 
                 borderRadius:12,
                 borderBottomWidth:1,
                 borderBottomColor:'grey',
                 
             },
             flatImgs:{
                   width:50, 
                   height:50,
                   borderRadius:50
             },
             imgText:{
                  display:'flex',
                  // flex:1,
                  // justifyContent:'center',
                  alignItems:'center',
                  padding:10,
                  backgroundColor:'red'
             },
             t3:{
              fontSize:18,
                 fontWeight:'600',
                //  padding:5,
                 paddingTop:12,
                 maxWidth:100,
                  textAlign:'center'
             }
});