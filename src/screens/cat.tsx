import React from "react";
import { Text, TextInput, View } from "react-native";

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
    
    </View>
  );
};

export default Cat