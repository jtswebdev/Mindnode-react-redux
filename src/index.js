
import './index.css'

import React               from 'react'
import ReactDOM            from 'react-dom'
import { Provider }        from 'react-redux'
import { createStore }     from 'redux'
import mindnodeApp         from './reducers'
import App                 from './App'
import { getInitialState } from './js/storage'
import { saveState }       from './js/storage'

import registerServiceWorker from './registerServiceWorker'


// Fetch State & Create Store

    let startState = getInitialState();
    let store      = createStore( mindnodeApp, startState );

export default store


ReactDOM.render(

    <Provider store={ store }>

        <App />

    </Provider>,

    document.getElementById( 'root' )

);


registerServiceWorker();


// Determine Highest ID Key
    export const getLastKey = () => {

        let state  = store.getState();
        let nodes  = state.nodes;
        let lastId = 0;

        for ( let id in nodes ) {

            lastId = id > lastId ? id : lastId

        }

        return lastId;

    };

    
// Save Nodes on Window Close
    window.onbeforeunload = () => {

        let endState = store.getState();
        saveState( 'mindnode-state', endState );

    };



