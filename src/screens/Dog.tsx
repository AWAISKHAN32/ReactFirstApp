import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Dog = () =>{
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
        <View style={styles.Indicator}>
    <ActivityIndicator color='gold' size='large' />
    <Button title ='Press Me' onPress={() => Alert.alert('Button is Pressed')} 
        />
        </View>
        </SafeAreaView>
        </SafeAreaProvider>
        );
};

const styles =StyleSheet.create({
    container:{
flex:1,
justifyContent:'center'
    },   
    Indicator: {
        
        },
        press:{
         color:'gold'
        },
        
});
export default Dog