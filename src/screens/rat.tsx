import React, { useState } from "react";
import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Rat =() =>{
const [modalVisible, setModalVisible] = useState(false);
return(
<SafeAreaProvider>
    <SafeAreaView style={styles.centeredView}>
<Modal animationType="slide"
transparent={true}
 visible={modalVisible}
 onRequestClose={() => {
    
    setModalVisible(!modalVisible);
 }}>
 <View style={styles.centeredView}>
    <View style={styles.modalView}>
        <Text style={styles.modalText}>Text For Modal </Text>
        <Pressable
              style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)} >
                <Text style={styles.textStyle}>Hide The Modal</Text>
            </Pressable>
    </View>
</View>

</Modal>
<Pressable style={[styles.button, styles.buttonOpen]}
onPress={() => setModalVisible(true)}>
<Text style={styles.textStyle}>Show Modal</Text>
</Pressable>
</SafeAreaView>
</SafeAreaProvider>
);
};
const styles = StyleSheet.create({
centeredView:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
modalView:{
    margin:2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',

},
modalText:{
color:'brown',
textAlign:'center'
},
textStyle:{
color:'gold',
fontWeight:'bold',
},
button:{
     borderRadius: 20,
    padding: 10,
    elevation: 2,
},
buttonOpen:{
backgroundColor:'grey',
}
});
export default Rat;