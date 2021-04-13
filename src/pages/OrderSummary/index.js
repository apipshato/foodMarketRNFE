import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FoodDummy1 } from "../../assets";
import { Header, ItemListFood } from "../../components";

const OrderSummary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve to meal"
        onBack={() => {}}
      />
      <View>
        <Text>OrderSummary</Text>
        <ItemListFood image={FoodDummy1} items={14}/>
        <Text>Detail Transaction</Text>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({});
