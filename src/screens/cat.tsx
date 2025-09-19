import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const Cat = () =>{
  return(
    <View>
    <Text>I am your Cat </Text>

    <TextInput 
           style={{
           height: 50,
           borderColor: 'grey',
           borderWidth:3,
    }}
    defaultValue = "Name me!"
    />
    <Image
         style={{ width: 200, height: 200, borderWidth: 2, borderColor: 'black' }}
         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
         resizeMode="cover"  // Try "cover", "stretch", "repeat", "center"
         />
    </View>
  );
};

export default Cat