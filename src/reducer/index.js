import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import AppStore from './countstore'

export default (history) => combineReducers({
    router: connectRouter(history),
    app: AppStore
})