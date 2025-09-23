import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Food=() =>{
    const [searchValue, setSearchValue] = useState('')
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
              }

});