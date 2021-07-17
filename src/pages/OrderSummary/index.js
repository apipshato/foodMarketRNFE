//import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, ItemListFood, ItemValue } from "../../components";
import { getData } from "../../utils";

const OrderSummary = ({ navigation, route }) => {
  const[token , setToken]=useState('')
  const { item, transaction, userProfile } = route.params;
  useEffect(()=>{
getData('token').then(res =>{
  console.log('token : ', res);
  setToken(res.value)
})
  },[])

  const onCheckOut= ()=>{
    const data ={
    food_id:item.id,
    user_id: userProfile.id,
    quantity: transaction.totalItem,
    total: transaction.total,
    status: 'PENDING'

    //navigation.navigate('SuccessOrder')
  }}
  Axios.post(`${API_HOST.url}/checkout`,data,{
    header:{
      'Authorization': token
    }
  }).then(res => {
    console.log('checkout success ', res.data);
  }).catch(err =>{
    console.log('error checkout ', err);
  })
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve to meal"
        onBack={() =>navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary</Text>
        <ItemListFood
          type="order-summary"
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={{ uri: item.picturePath }}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No" value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No" value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={onCheckOut}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#020202",
    marginBottom: 8
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24
  }
});
