import React from "react";
import { Image, ImageBackground, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const image = { uri: 'https://reactnative.dev/img/tiny_logo.png' };
const Cat = () => {
  return (
  <View>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}
      >I am your Cat </Text>

      <TextInput
        style={{
          height: 50,
          width: 150,
          borderColor: 'gold',
          borderWidth: 3,
          color: 'grey'
        }}
        defaultValue="Write Here!"
      />

      <Image
        style={styles.imgs}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      // Try "cover", "stretch", "repeat", "center"
      />
      <ImageBackground source={image} style={styles.bgimgs} >
        <Text style={styles.text}>This Text Is For Image BackGround</Text>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  imgs: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'gold',
    marginTop: 18,
    resizeMode: "cover"
  },
  bgimgs: {
    width: 150,
    height: 150,
    marginTop: 18,
    resizeMode: "cover",
  },
  text: {
    color: 'gold',
    textAlign: 'center',
    fontSize: 12,
  }
});
export default Cat