import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Card = (props) => {
  return ( 
    <TouchableOpacity onPress={() => props.navigation.navigate("NewsDetailsScreen")}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image 
            source={require("../../assets/news.jpeg")} 
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
          <MaterialIcons 
            name="favorite-border" 
            color="#72bcd4" 
            size={24}
          />
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur repudiandae...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  titleWrapper: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  descWrapper: {
    paddingHorizontal: 15,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 15,
    marginTop: 10,
  },
});
 
export default Card;