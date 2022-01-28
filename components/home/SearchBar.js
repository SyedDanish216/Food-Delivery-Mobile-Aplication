import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView,  TouchableOpacity, } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBar({ data,cityHandler}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  
  useEffect(() => {
    function setFunc() {
      setOutput([]);
    }
    setFunc();
    data.filter((val) => {
  
       if (input === "")
      setOutput([]);
     else if(input===val.name)
      setOutput([])
      else if (val.name.toLowerCase().includes(input.toLocaleLowerCase())) {
       setOutput((outputtext) => [...outputtext, val]);
      }
    });
    function Handler(){
      if(input==="")
      {
        cityHandler(data);
      }
    }
    Handler();
  }, [input]);
  const setData=(elem)=>{
    setOutput([]);
    cityHandler([elem]);
    setInput(elem.name);
    
    
    
  }
  return (
    <View
      style={{
        marginTop: 15,

        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          alignContent: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "0%",
            left: "2%",
            width: "96%",
            backgroundColor: "#eee",
            borderRadius: 15,

            fontWeight: "700",
            height: "100%",
          }}
        >
          <TextInput
            type="text"
            id="header-search"
            placeholder="Search"
            name="location"
            value={input}
            onChangeText={(e) => setInput(e)}
            style={{ height: "100%", paddingLeft: 45 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            left: "2%",
            top: "0%",
            height: 30,
            marginTop: 10,
          }}
        >
          <Entypo
            name="location-pin"
            size={24}
            color="black"
            style={{ paddingTop: 2 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            right: "3%",
            top: "0%",
            height: 34,
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 15,
            backgroundColor: "white",
          }}
        >
          <AntDesign
            name="clockcircleo"
            size={12}
            color="black"
            style={{ paddingLeft: 6, fontWeight: "bold" }}
          />
          <Text
            style={{
              paddingLeft: 6,
              fontSize: 14,
              paddingRight: 6,
              fontWeight: "bold",
            }}
          >
            Search
          </Text>
        </View>
      </View>

      <View style={{ maxHeight: 180, marginTop: 10 }}>
        <ScrollView vertical showsVerticalScrollIndicator={true}>

        {output.map((elem, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>setData(elem)}>
              <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ width: "94%", paddingLeft: 3, borderBottomWidth: 1 }}
            >
              <Text style={{ fontSize: 16, paddingBottom: 3 }}>{elem.name}</Text>
            </View>
          </View>
              </TouchableOpacity>
            );
          })}

          {/* <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ width: "94%", paddingLeft: 3, borderBottomWidth: 1 }}
            >
              <Text style={{ fontSize: 16, paddingBottom: 3 }}>bcjusb</Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
}
