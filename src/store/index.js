import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import newsReducer from './reducers/newsReducer'

const reducer = combineReducers({
  news: newsReducer
})

const middleware = applyMiddleware(thunk)

const store = createStore(
  reducer,
  composeWithDevTools(middleware)
)

export default store
