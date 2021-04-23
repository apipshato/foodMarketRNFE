import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Rating from "../Rating";

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  totalOrder,
  price,
  type
}) => {
  
  const renderContent = () =>{
    switch(type){
      case 'product':
        //maka akan muncul seperti di home page
        return (
          <>
          <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
       <Rating rating={rating}/>
        
        </>
        )

        case 'order-summary':
          //item list order summary
          return(
            <>
              <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
         
           
        </View>
        <Text style={styles.items}>{items} items</Text>
    
            </>
          )
          case 'in-progress':
            //item list di in proggress
            return(
              <>
                <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>
           {orderItems} items . IDR {totalOrder}
           </Text>
           </View>
       
              </>
            )
            case 'past-order':
              // item list in past order
              return(
                <>
                  <View style={styles.content}>
            <Text style={styles.title}>Soup Bumil</Text>
            <Text style={styles.price}>
             {orderItems} items . IDR {totalOrder}
             </Text>
             </View>
             <View>
               <Text>Tanggal</Text>
               <Text>Status</Text>
             </View>
         
                </>
              )
              default:
                //item product
                return (
                  <>
                  <View style={styles.content}>
                  <Text style={styles.title}>Soup Bumil</Text>
                  <Text style={styles.price}>IDR 289.000</Text>
                </View>
               <Rating/>
                
                </>
                )
                }
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 8,
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12
  },
  content: { flex: 1 },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#020202"
  },
  price: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#8D92A3"
  },
  items: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#8D92A3"
  }
});
