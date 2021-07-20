import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as newsActions from '../store/actions/newsActions';

const NewsDetailsScreen = ({ route }) => {

  const dispatch = useDispatch()

  const { articleUrl } = route.params
  const article = useSelector(
    state => state.news.articles.articles.find(article => article.url === articleUrl)
  )

  const isFavorite = useSelector(
    state => state.news.favorites.some(article => article.url === articleUrl)
  )

  console.log(article)

  return ( 
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground 
          style={styles.image}
          source={{uri: article.urlToImage}}  
        >
          <View style={styles.titleContainer}>
            <Text style={styles.author}>
              {article.author}
            </Text>
            <MaterialIcons 
              name={isFavorite ? 'favorite' : 'favorite-border'}
              color="#72bcd4" 
              size={24}
              onPress={() => {
                dispatch(newsActions.toggleFavorites(article.url))
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          {article.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  author: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    color: 'white'
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular'
  }
})
 
export default NewsDetailsScreen;