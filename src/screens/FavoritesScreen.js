import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const FavoritesScreen = (props) => {

  const favorites = useSelector(state => state.news.favorites)
  
  if (!favorites.length) {
    return (
      <View style={styles.nofavs}>
        <Text style={styles.text}>No Favorites</Text>
      </View>
    )
  }

  return ( 
    <FlatList
      data={favorites}
      keyExtractor={item => item.url}
      renderItem={({item}) => (
        <Card 
          navigation={props.navigation} 
          title={item.title} 
          image={item.urlToImage}
          description={item.description}
          url={item.url}
        />
      )} />
  );
}

const styles = StyleSheet.create({
  nofavs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#757575',
    textTransform: 'uppercase'
  },
})
 
export default FavoritesScreen;