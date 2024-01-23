import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import CupertinoSearchBarBasic from "./components/CupertinoSearchBarBasic";
import MaterialIconButtonsFooter from "./menu";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.rect}></View>
      <View style={styles.ellipseRow}>
        <Image
          source={require("../assets/Rectangle_2.png")}
          style={styles.ellipse}
        />
        <View style={styles.namaStack}>
          <Text style={styles.nama}>NAMA</Text>
          <View style={styles.nama1Stack}>
            <Text style={styles.nama1}>
              Cari tempat healingmu dan pesan tiketnya disini!
            </Text>
          </View>
        </View>
      </View>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <Text style={styles.tempatWisata}>Tempat wisata</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.imageRow}
      >
        <ImageBackground
          source={require("../assets/Rectangle_2.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.bromoMountain}>BROMO MOUNTAIN</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/Rectangle_2.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Text style={styles.bromoMountain1}>BROMO MOUNTAIN</Text>
        </ImageBackground>
      </ScrollView>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  materialIconButtonsFooter: {
    flex: 1, // Make it take up the available space
    alignSelf: 'stretch', // Stretch to fill the container width
    marginHorizontal: 20, // Adjust the margin as needed
    marginTop: 5, // Adjust the margin as needed
  },
  rect: {
    width: "100%",
    height: 85,
    backgroundColor: "#E2D784",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
  },
  ellipseRow: {
    flexDirection: "row",
    marginTop: 32,
    width: "90%",
  },
  ellipse: {
    width: 98,
    height: 97,
    borderRadius: 100,
  },
  nama: {
    fontFamily: "roboto-700",
    color: "#121212",
    lineHeight: 20,
  },
  nama1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 20,
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 73,
    borderRadius: 100,
  },
  nama1Stack: {
    width: "70%",
  },
  namaStack: {
    width: "70%",
    marginLeft: "5%",
    marginTop: 8,
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: "80%",
    borderRadius: 17,
    marginTop: 25,
  },
  tempatWisata: {
    fontFamily: "roboto-700",
    color: "#121212",
    lineHeight: 30,
    fontSize: 20,
    marginTop: 10,
    marginLeft: "5%",
  },
  image: {
    width: "60%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image_imageStyle: {
    width: "100%",
    height: "100%",
  },
  bromoMountain: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    lineHeight: 30,
    fontSize: 18,
  },
  image1: {
    width: "60%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  image1_imageStyle: {
    width: "100%",
    height: "100%",
  },
  bromoMountain1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    lineHeight: 30,
    fontSize: 18,
  },
  imageRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: "5%", // Adjust this value as needed
  },
  

});

export default Untitled;
