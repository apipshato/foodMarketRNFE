import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";

const Number = ({ number, type }) => {
  if (type === "decimal") {
    return (
      <NumberFormat
        value={number}
        decimalSeparator="."
        displayType="text"
        renderText={value =>
          <Text>
            {value}
          </Text>}
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
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
