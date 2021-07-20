import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import { fetchArticles } from '../store/actions/newsActions'

const NewsScreen = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const {articles} = useSelector(state => state.news.articles)

  return ( 
    <FlatList
      data={articles}
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

const styles = StyleSheet.create({})
 
export default NewsScreen;