import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Food from "./foodPanda";
import Cat from "./cat";
import Rat from "./rat";

const Drawer = createDrawerNavigator();

const ExtraScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="gold" size="large" />
      <Button title="Press Me" onPress={() => Alert.alert("Button is Pressed")} />
    </View>
  );
};

const Dog = () => {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Food" component={Food} />
        <Drawer.Screen name="Cat" component={Cat} />
        <Drawer.Screen name="Rat" component={Rat} />
        <Drawer.Screen name="Extra" component={ExtraScreen} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Dog;
