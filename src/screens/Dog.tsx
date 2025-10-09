import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Food from "./foodPanda";
import Cat from "./cat";
import Rat from "./rat";

const Drawer = createDrawerNavigator();

const Dog = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <ActivityIndicator color="gold" size="large" />
      <Button title="Press Me" onPress={() => Alert.alert("Button is Pressed")} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Dog;
