import { combineReducers } from 'redux'

import { toggles }  from './types/toggles'
import { editNode } from './types/node'
import { nodes }    from './types/tree'
import { focus }    from './types/traverse'


const mindnodeApp = combineReducers({

    toggles,
    focus,
    editNode,
    nodes

});


export default mindnodeApp