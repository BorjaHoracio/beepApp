import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'beep/app/reducers'
import Reactotron from 'beep/config/ReactotronConfig'

let store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		Reactotron.createEnhancer()
	)
);

export default store;
