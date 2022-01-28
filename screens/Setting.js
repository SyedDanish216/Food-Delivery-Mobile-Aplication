import React from "react";
import { View, Text, SafeAreaView, StatusBar,TouchableOpacity,StyleSheet } from "react-native";
import firebase from "../firebase";
export default function Setting({navigation}) {
  const auth = firebase.auth();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Register")
      })
      .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%", flex: 1 }}>
      <View
        style={{ marginTop: StatusBar.currentHeight }}
      >
      <View style={{marginTop:30,marginHorizontal:20,display:"flex",alignItems:"center",
      justifyContent:"center"}}>
        <Text style={{fontSize:20}}>Email:{" "+auth.currentUser?.email}</Text>
        </View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    },
   
    buttonContainer: {
      width: "40%",
      alignItems: "center",
      display: "flex",
      marginTop: 40,
      backgroundColor: "black",
      paddingVertical: 10,
      borderRadius: 30,
      justifyContent:"center",
      borderWidth:3,
      alignSelf:"center"
    },
    button: {
      // backgroundColor: "#0782F9",
      // width: "100%",
      // padding: 15,
      // borderRadius: 10,
      // alignItems: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });