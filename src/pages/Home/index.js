import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
useWindowDimensions
} from "react-native";

import {
  FoodDummy4,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  ProfileDummy
} from "../../assets";

import { FoodCard, Gap } from "../../components";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () =>
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />;

const SecondRoute = () =>
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />;
 //const initialLayout = { width: Dimensions.get("window").width };

const Home = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "New Taste" },
    { key: "2", title: "Popular" },
    { key: "3", title: "Recommended"}
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });
  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
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
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profile: { width: 50, height: 50, borderRadius: 8 },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "white"
  },
  appName: { fontSize: 22, fontFamily: "Poppins-Medium", color: "#020202" },
  desc: { fontSize: 14, fontFamily: "Poppins-Light", color: "#8D92A3" },
  foodCardContainer: { flexDirection: "row", marginVertical: 12 },
  page:{flex:1, backgroundColor:"yellow"},
  tabContainer:{flex:1}
});
