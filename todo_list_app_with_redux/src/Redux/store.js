import {legacy_createStore,combineReducers,compose} from "redux"
import {TodoSate} from "./reducer"

let composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers=combineReducers({
      todos:TodoSate
})
let store=legacy_createStore(reducers,composeEnhancer())

export default store