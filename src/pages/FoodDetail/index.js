import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FoodDummy6, IcBackWhite } from "../../assets";
import { Button, Rating } from "../../components";

const FoodDetail = () => {
  return (
    <View>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View>
          <View>
            <Text>Cherry Healty</Text>
            <Rating />
          </View>
          <Text>Counter</Text>
        </View>
        <Text>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
        <Text>Ingridients :</Text>
        <Text>Seledri, telur, blueberry, madu.</Text>
        <View>
          <View>
            <Text>Total Price :</Text>
            <Text>Rp 12.000.000</Text>
          </View>
          <View>
            <Button text="Order Now" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  cover: { height: 330, paddingTop: 26, paddingLeft: 22 },
  back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "yellow",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop:-40
  }
});
