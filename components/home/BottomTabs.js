import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({ data }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",

        // flex: 1,
        //     alignItems: "center",
        //     justifyContent: "space-between",
        //     flexDirection: "row",
        //     backgroundColor: "#eee",
        //     width:"100%",
        //     position: "absolute",
        //     bottom: 1,
        //     zIndex: 999,
      }}
    >
    <TouchableOpacity>
      <Icon icon="home" text="Home" />
      </TouchableOpacity>

      <TouchableOpacity>
      <Icon icon="search" text="Browse" />
      </TouchableOpacity>

      <TouchableOpacity>
      <Icon icon="shopping-bag" text="Grocery" />
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => data.navigate("MyOrders") }>
      {/* <Icon
        icon="receipt"
        text="Orders"
       
      /> */}
         <View>
      <FontAwesome5
        // name={props.icon}
        name="receipt"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Orders</Text>
    </View>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => data.navigate("Setting") }>
 
         <View>
      <FontAwesome5
        // name={props.icon}
        name="user"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Account</Text>
    </View>
      </TouchableOpacity>
      {/* <Icon icon="user" text="Account" /> */}
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
