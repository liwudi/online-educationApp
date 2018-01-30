/**
 * Created by mapbar_front on 2017/11/18.
 */

import React,{ Component } from 'react';
import { render } from 'react-dom';
import './css/common.css'
import './css/components.css'

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/index';
const store = createStore(rootReducers,
    applyMiddleware(thunkMiddleware)
);

import Main from './pages/Main';

class App extends Component{
    render(){
        return (
            <div className="fx1 wrapper">
                <Provider store={store}>
                    <Main />
                </Provider>
            </div>
        )
    }
}
render(<App />,document.getElementById('root'));


