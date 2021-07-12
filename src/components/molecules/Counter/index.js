import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IcButtonMin, IcButtonPlus } from "../../../assets";

const Counter = () => {
  const[value, setValue]=useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity>
        <IcButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  value: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#020202",
    marginHorizontal: 10
  }
});
