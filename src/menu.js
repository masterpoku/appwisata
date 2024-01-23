import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="ticket-confirmation"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}>
        <MaterialCommunityIconsIcon
          name="bell"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper4}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2D784",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 10,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper2: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  buttonWrapper3: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper4: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  }
});

export default MaterialIconButtonsFooter;
