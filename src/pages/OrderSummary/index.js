//import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FoodDummy1 } from "../../assets";
import { Button, Gap, Header, ItemListFood, ItemValue } from "../../components";

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve to meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary</Text>
        <ItemListFood type="order-summary" name="Sop Bumil" price="380.000" items={14} image={FoodDummy1} items={14}/>
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Cherry Healty" value="IDR 18.390.000"/>
        <ItemValue label="Driver" value="IDR 50.000"/>
        <ItemValue label="Tax 10%" value="IDR 1.800.390"/>
        <ItemValue label="Total Price" value="IDR 39.803.000" valueColor="#1ABC9C"/>
     
        
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Afif Shato"/>
        <ItemValue label="Phone No" value="089676645655"/>
        <ItemValue label="Address" value="Jalan Danau Sentarum"/>
        <ItemValue label="House No" value="jalur 1 no 5"/>
        <ItemValue label="City" value="Pontianak"/>
      </View>
      <View style={styles.button}>
        <Button text="Checkout Now" onPress={() =>navigation.replace("SuccessOrder")}/>
      </View>
      <Gap height={40}/>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content:{
    backgroundColor:'white',
    paddingHorizontal:24,
    paddingVertical:16,
    marginTop:24
  },
  label:{
    fontSize:14,
    fontFamily:"Poppins-Regular",
    color:"#020202",
    marginBottom:8
  },
  button:{
    paddingHorizontal:24,
    marginTop:24
  }
});
