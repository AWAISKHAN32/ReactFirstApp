import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const Cat = () =>{
  return(
    <View>
    <Text
          style = {{
            color:'white',
            fontSize:20,
          }}
          >I am your Cat </Text>

    <TextInput 
           style={{
           height: 50,
           width:150,
           borderColor: 'grey',
           borderWidth:3,
           color:'white'
    }}
    defaultValue = "Name me!"
    />
    <Image
         style={{ width: 150, height: 150, borderWidth: 2, borderColor: 'black' }}
         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
         resizeMode="cover"  // Try "cover", "stretch", "repeat", "center"
         />
    </View>
  );
};

export default Cat