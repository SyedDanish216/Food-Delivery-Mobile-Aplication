import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Catogories from "../components/home/Catogories";
import RestaurantItem from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import { restaurantData } from "../components/home/RestaurantData";
import BottomTabs from "../components/home/BottomTabs";
import HeaderTabs from "../components/home/HeaderTabs";
// import { Divider } from "react-native-elements";


export default function Home({navigation}) {
  const [city, setCity] = useState(restaurantData);
  const [changeCity,setChangeCity]=useState(restaurantData);
  useEffect(()=>{

     setChangeCity(city);
    
     
  },[city])
  

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%", flex: 1 }}>
      <View
        style={{ backgroundColor: "white", marginTop: StatusBar.currentHeight }}
      >
        <HeaderTabs />
        <SearchBar data={restaurantData} cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={true} >
        <Catogories />
        <RestaurantItem data={changeCity} navigation={navigation} />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs data={navigation}/>
    </SafeAreaView>
  );
}
