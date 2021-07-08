import React from "react";
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4
} from "../../../assets";
import ItemListFood from "../ItemListFood";
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from "../ItemListMenu";

/*
1. type product
2. Order-summary
3. in-progress
4. past-orders
*/

const renderTabBar = props =>
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#020202",
      height: 3,
      width: "15%",
      marginLeft: "3%"
    }}
    style={{
      backgroundColor: "white",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: "#F2F2F2",
      borderBottomWidth: 1
    }}
    tabStyle={{ width: "auto" }}
    renderLabel={({ route, focused }) =>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          color: focused ? "#020202" : "#8D92A3"
        }}
      >
        {route.title}
      </Text>}
  />;

const Account = () => {
  const navigation =useNavigation();
  const signOut= () => {
    AsycnStorage.multiRemove(['userProfile', 'token']).then(()=> {
      navigation.reset({index:0, routes: [{name : 'signIn'}]})
    })
  }
  return (
    <View style={{ paddingTop: 8, paddingHorizontal:24 }}>
      <ItemListMenu text="Edit Profile"/>
      <ItemListMenu text="Home Address"/>
      <ItemListMenu text="Security"/>
      <ItemListMenu text="Payments"/>
      <ItemListMenu text="SignOut" onPress={signOut}/>
    </View>
  );
};

const FoodMarket = () => {
  const navigation =useNavigation();
  return (
    <View style={{ paddingTop: 8 , paddingHorizontal:24}}>
     <ItemListMenu text="Rate App"/>
     <ItemListMenu text="Help Center"/>
     <ItemListMenu text="Privacy Policy"/>
     <ItemListMenu text="Term and Conditions"/>
    </View>
  );
};


const initialLayout = { width: Dimensions.get("window").width };

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "1", title: "Account" },
    { key: "2", title: "FoodMarket" }
   
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,

  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
