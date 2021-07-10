import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";

const Number = ({ number }) => {
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      decimalSeparator=","
      prefix="IDR "
      displayType="text"
      renderText={value =>
        <Text>
          {value}
        </Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
