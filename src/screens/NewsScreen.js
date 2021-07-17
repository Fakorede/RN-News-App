import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card";

const NewsScreen = (props) => {
  return ( 
    <View>
      <Card navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({})
 
export default NewsScreen;