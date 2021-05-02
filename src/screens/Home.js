import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

function Home({ navigation }) {
  const [loading, setLoading] = useState(true);

  const handlePress = () => {
    console.log("11here");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#794BC4" size={60} style={styles.item} />;
      </View>
    );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <View onClick={handlePress} style={styles.touchable}>
        <Text style={styles.welcome}>
          Welcome to React Native for Web Starter!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Alt+Cmd+I for dev menu
        </Text>
        <Button
          title={"Go to details"}
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  logo: {
    alignSelf: "center",
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  touchable: {
    backgroundColor: "#CAE6FE",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Home;
