import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { FoodDummy6, IcBackWhite } from "../../assets";
import { Button, Counter, Rating } from "../../components";

const FoodDetail = ({navigation,route }) => {
  const {
    id,
    name,
    picturePath,
    description,
    ingredients,
    rate,
    price,
  } = route.params;
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
           {description}
          </Text>
          <Text style={styles.label}>Ingridients :</Text>
          <Text style={styles.description}>
            {ingredients}.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Text style={styles.priceTotal}>Rp 12.000.000</Text>
          </View>
          <View style={styles.button} >
            <Button text="Order Now"
             onPress={()=> navigation.navigate("OrderSummary")}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: { flex: 1 },
  title: { fontSize: 16, fontFamily: "Poppins-Regular", color: "#020202" },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  },
  cover: { height: 330, paddingTop: 26, paddingLeft: 22 },
  back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1
  },
  desc: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#8D92A3",
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#020202",
    marginBottom: 4
  },
  mainContent: { flex: 1 },
  footer: { flexDirection: "row", paddingVertical: 16, alignItems: "center" },
  button: { width: 163 },
  priceContainer: {
    flex: 1
  },
  labelTotal: { fontSize: 13, fontFamily: "Poppins-Regular", color: "#8D92A3" },
  priceTotal: { fontSize: 18, fontFamily: "Poppins-Regular", color: "#020202" }
});
