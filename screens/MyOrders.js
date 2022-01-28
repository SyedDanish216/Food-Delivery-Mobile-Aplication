import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

//Ratta code to avoid ajeeb error
// import { LogBox } from "react-native";
// import _ from "lodash";

// LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
// LogBox.ignoreAllLogs(); // ignore all logs
// const _console = _.clone(console);
// console.warn = (message) => {
//   if (message.indexOf("Setting a timer") <= -1) {
//     _console.warn(message);
//   }
// };
//end of ratta code

export default function MyOrders({ navigation }) {
  const [lastOrder, setLastOrder] = useState([]);


  

  useEffect(() => {
    const getTodos = () => {
      const db = firebase.firestore().collection("orders");
     
     db.onSnapshot((snapshot) => {
        const saveFirebaseTodos = [];
        snapshot.forEach((doc) => {
          saveFirebaseTodos.push(doc.data());
          //setLastOrder((prev)=>[...prev,doc.data()]
        });
        setLastOrder(saveFirebaseTodos);
      });
    };
     getTodos();
  
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%", flex: 1 }}>
      <View
        style={{ backgroundColor: "white", marginTop: StatusBar.currentHeight }}
      >
        {/* green checkmark */}
        <View
          style={{
          
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <LottieView
              style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
              source={require("../assets/animations/check-mark.json")}
              autoPlay
              speed={0.5}
              loop={false}
            /> */}
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold",marginBottom:20,marginTop:20 }}>
              Your Ordered List
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {lastOrder.map(({ items},index) => {
           return(   <View key={index}>
              <MenuItems foods={items} hideCheckbox={true} marginLeft={10}  />
            </View>
           )
            })}

    
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
