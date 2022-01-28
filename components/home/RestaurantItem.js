import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItem({navigation, ...props}) {
  useEffect(()=>{
    setRestaurantData(props.data);
    
 },[props.data])


const [restaurantData,setRestaurantData]=useState(props.data);
  return (
    <>
    <TouchableOpacity style={{ marginBottom: 30 }} activeOpacity={1}>
      {restaurantData.map((elem,index) => {
        const {name,image_url,rating}=elem;
        return(
          <TouchableOpacity
          key={index}
          activeOpacity={1}
         
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: elem.name,
              image: elem.image_url,
              price: elem.price,
              reviews: elem.reviews,
              rating: elem.rating,
              categories: elem.categories,
            })
          }
        >
        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image_url={image_url} />

          <RestaurantInfo name={name} rating={rating}/>
        </View>
        </TouchableOpacity>
        );
      })}
    </TouchableOpacity>
    </>
  );
}

const RestaurantImage = ({image_url}) => {
  return (
    <View>
      <Image
        source={{
          uri: image_url,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 15, right: 15 }}>
        <AntDesign name="hearto" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = ({name,rating}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "gray",
          }}
        >
          30-45 - min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
