import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { loadState } from './localStorage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/index'
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const persisedStore = loadState()
export const history = createBrowserHistory()

export default createStore(
/*    rootReducer,
    persisedStore,
    applyMiddleware(routerMiddleware(history), reduxThunk, logger)*/
    rootReducer,
    // enlever en mode prod
    composeWithDevTools(applyMiddleware(thunk))
)
