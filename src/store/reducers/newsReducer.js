import { FETCH_ARTICLES, TOGGLE_FAVORITES } from '../constants/newsConstants';

const initialState = {
  articles: [],
  favorites: [],
}

function newsReducer (state=initialState, action) {
  switch(action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    case TOGGLE_FAVORITES:
      // add or remove item from favorites
      const index = state.favorites.findIndex(article => article.url === action.payload)
      if (index >= 0) {
        // item exists
        const favorites = [...state.favorites]
        favorites.splice(index, 1)
        return {
          ...state,
          favorites
        }
      } else {
        // item does not exist in favorites
        const article = state.articles.articles.find(article => article.url === action.payload)
        return {
          ...state,
          favorites: state.favorites.concat(article)
        }
      }
    default: 
      return state;
  }
}

export default newsReducer;