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
        <ItemValue label="Cherry Healty" value="IDR 18.390.000"/>
        <ItemValue label="Driver" value="IDR 50.000"/>
        <ItemValue label="Tax 10%" value="IDR 1.800.390"/>
        <ItemValue label="Total Price" value="IDR 39.803.000"/>
     
        
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Afif Shato"/>
        <ItemValue label="Phone No" value="089676645655"/>
        <ItemValue label="Address" value="Jalan Danau Sentarum"/>
        <ItemValue label="House No" value="jalur 1 no 5"/>
        <ItemValue label="City" value="Pontianak"/>
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
