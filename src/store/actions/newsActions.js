import { FETCH_ARTICLES, TOGGLE_FAVORITES } from '../constants/newsConstants';

export const fetchArticles = () => async (dispatch) => {
  try {

    //const response = await fetch(API_URL)
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dff819c11b06404daca3fe76c931b1de')
    const resData = await response.json()

    dispatch({
      type: FETCH_ARTICLES,
      payload: resData,
    })
  } catch (error) {
    console.log(error)
  }
}

export const toggleFavorites = (url) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_FAVORITES,
      payload: url,
    })
  } catch (error) {
    console.log(error)
  }
}
