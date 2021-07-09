import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { FoodDummy4, FoodDummy1, FoodDummy2, FoodDummy3 } from "../../assets";

import { FoodCard, Gap, HomeProfile, HomeTabSection } from "../../components";

const Home = () => {
 useEffect(()=>{
   
 })
  return (
    <ScrollView>
     <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy4} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
    </ScrollView>
   
  );
};

export default Home;

const styles = StyleSheet.create({
  foodCardContainer: { flexDirection: "row", marginVertical: 12 },
  page: { flex: 1 },
  tabContainer: { flex: 1 }
});
