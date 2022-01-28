import React, { useState,useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,

  TextInput,
  
} from "react-native";
import firebase from "../firebase";

export default function Register({ navigation }) {
  const auth = firebase.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Register");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])
  const handleSignUp = () => {
    if (!email | !password | cpassword) {
      alert("Fill all fields first");
    } else if (password !== cpassword) {
      alert("Password are not matching");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);
          setActiveTab("Login");
        })
        .catch((error) => alert(error));
    }
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("Home")
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", height: "100%", flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
        >
          <HeaderButton
            text="Register"
            btncolor="black"
            textcolor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <HeaderButton
            text="Login"
            btncolor="white"
            textcolor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
        {activeTab === "Register" ? (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="ConfirmPassword"
              value={cpassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.input}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    width: "70%",
  },
  buttonContainer: {
    width: "40%",
    alignItems: "center",
    display: "flex",
    marginTop: 40,
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 30,
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
