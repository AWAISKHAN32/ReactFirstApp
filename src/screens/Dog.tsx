import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Dog = () =>{
    return(
        <View style={styles.Indicator}>
    <ActivityIndicator color='blue' size='large' />
    <Button title ='Press Me' onPress={() =>Alert.alert('Button is Pressed')} 
        color="gold"/>
        </View>
        );
};

const styles =StyleSheet.create({
        Indicator: {
            

        },
        press:{
         color:'gold'
        },
        
});
export default Dog