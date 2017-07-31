
import createTree from './createTree'


export const getInitialState = () => {

    return determineState();

};


// Check Saved Data
    const determineState = () => {

      let persistedState = getSavedState( 'mindnode-state' );
      let initialState   = defaultState();

      return persistedState ? mergeStates( initialState, persistedState ) : defaultState();

    };


// Merge Default w/ Save
    const mergeStates = ( initial, persisted ) => {

        initial.nodes = persisted;

        return initial;

    };


// Generate Default State
    const defaultState = () => {

        const tree = createTree();

        return {

            toggles: {

                showNew: false,
                showDetails: false,
                editActive: false,
                newIconsActive: false

            },

            focus: { id: 0 },

            nodes: tree

        };

    };


// Retrieve / Store

    const getSavedState = ( id ) => {


        function getFromLocalStorage( key ) {

            return parseString( localStorage.getItem( key ) );

        }

        function parseString( itemToGet ) {

            return JSON.parse( itemToGet );

        }


        return getFromLocalStorage( id );


    };

    export const saveState = ( key, state ) => {


        saveToLocalStorage( stringify( state.nodes ) );


        function stringify( itemToSave ) {

            return JSON.stringify( itemToSave );

        }

        function saveToLocalStorage( string ) {

            localStorage.setItem( key, string );

        }


    };