
import store, { getLastKey } from '../index'


export const CREATE_NODE          = 'CREATE_NODE',
             DELETE_NODE          = 'DELETE_NODE',
             ADD_CHILD            = 'ADD_CHILD',
             REMOVE_CHILD         = 'REMOVE_CHILD',

             TOGGLE_DETAILS       = 'TOGGLE_DETAILS',
             TOGGLE_NEW           = 'TOGGLE_NEW',
             TOGGLE_EDIT          = 'TOGGLE_EDIT',
             TOGGLE_NEW_ICON_MENU = 'TOGGLE_NEW_ICON_MENU',

             TRAVERSE_TREE        = 'TRAVERSE_TREE',

             CHANGE_NAME          = 'CHANGE_NAME',
             CHANGE_TEXT          = 'CHANGE_TEXT',
             CHANGE_ICON          = 'CHANGE_ICON';


// NODE CREATION / REMOVAL

    let nextId;
    export const createNode  = ( name, text, icon, parentId ) => {

        nextId = getLastKey();
        nextId++;

        return {

            type: CREATE_NODE,
            name,
            text,
            icon,
            parentId,
            nodeId: nextId++

        }

    };

    export const deleteNode  = ( nodeId ) => ({

       type: DELETE_NODE,
        nodeId

    });

    export const addChild    = ( nodeId ) => {

        let childId = nextId - 1;

        return {

            type: ADD_CHILD,
            nodeId,
            childId

        }

    };

    export const removeChild = ( nodeId, childId ) => ({

        type: REMOVE_CHILD,
        nodeId,
        childId

    });



// EVENTS

    export const handleBackgroundClick = ( detailsVisible ) => {

      return {

          type: detailsVisible ? TOGGLE_DETAILS : TOGGLE_NEW

      }

    };

    export const handleNodeClick = ( id, nodeType ) => {

      return {

          type: nodeType === 'focus' ? TOGGLE_DETAILS : TRAVERSE_TREE,
          id

      }

    };

    export const handleNewIconButton = () => {

        return {

            type: TOGGLE_NEW_ICON_MENU

        }

    };

    export const handleCancelButton = () => {

        return {

            type: TOGGLE_NEW

        }

    };

    export const handleEditClick = () => {

      return {

          type: TOGGLE_EDIT

      }

    };

    export const handleSelectionClick = ( icon ) => {

        let state   = store.getState();

        let focusId = state.focus[ 'id' ];
        let node    = state.nodes[ focusId ];

        return {

            type: CHANGE_ICON,
            icon,
            node

        }

    };



// NODE EDIT

    export const updateName = ( node, name ) => {

        return {

            type: CHANGE_NAME,
            node,
            name

        }

    };

    export const updateText = ( node, text ) => {

        return {

            type: CHANGE_TEXT,
            node,
            text

        }

    };




