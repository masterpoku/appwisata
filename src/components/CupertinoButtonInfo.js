import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}></Text>
      <Icon name="gear" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#fff",
    fontSize: 17
  },
  icon: {
    top: 0,
    left: 30,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default CupertinoButtonInfo;
