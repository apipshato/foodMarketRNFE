import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FoodDummy1 } from "../../assets";
import { Button, Header, ItemListFood, ItemValue } from "../../components";

const OrderSummary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve to meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary</Text>
        <ItemListFood image={FoodDummy1} items={14}/>
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
        
      </View>
      <View>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
        <ItemValue/>
      </View>
      <View>
        <Button text="Checkout Now"/>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content:{
    backgroundColor:'white',
    paddingHorizontal:24,
    paddingVertical:16
  },
  label:{
    fontSize:14,
    fontFamily:"Poppins-Regular",
    color:"#020202",
    marginBottom:8
  }
});
