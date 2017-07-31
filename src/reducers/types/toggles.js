

import { TOGGLE_DETAILS, TOGGLE_NEW, TOGGLE_EDIT, TOGGLE_NEW_ICON_MENU } from '../../actions'


export const toggles = ( state = false, action ) => {


    switch ( action.type ) {

        case TOGGLE_NEW:

            return toggleNew( state );

        case TOGGLE_DETAILS:

            return toggleDetails( state );

        case TOGGLE_EDIT:

            return toggleEdit( state );

        case TOGGLE_NEW_ICON_MENU:

            return toggleNewIconMenu( state );

        default:

            return state

    }


};


// ----- Helpers -----

    //  Clone => Mutate => Return

    function toggleNew ( state ) {

        let newState = Object.assign( {}, state );

        newState.showNew = !newState.showNew;

        return newState;

    }

    function toggleDetails ( state ) {

        let newState = Object.assign( {}, state );

        newState.showDetails = !newState.showDetails;
        newState.editActive  = newState.showDetails === false ? false : null;

        return newState;

    }

    function toggleEdit ( state ) {

        let newState = Object.assign( {}, state );

        newState.editActive = !newState.editActive;

        return newState;

    }

    function toggleNewIconMenu( state ) {

        let newState = Object.assign( {}, state );

        newState.newIconsActive = !newState.newIconsActive;

        return newState;

    }
