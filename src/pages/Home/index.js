import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { FoodCard, Gap, HomeProfile, HomeTabSection } from "../../components";
import { getFoodData } from "../../redux/action";

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const { food } = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  });

  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map(itemFood => {
                return (
                  <FoodCard
                   key={itemFood.id}
                    name={itemFood.name}
                    image={{ uri: itemFood.picturePath }}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail')}
                  />
                );
              })}
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
