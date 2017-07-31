
import { CHANGE_NAME, CHANGE_TEXT, CHANGE_ICON } from '../../actions'


export const editNode = ( node = {}, action ) => {


    switch ( action.type ) {

        case CHANGE_ICON:

            return changeIcon( action.node, action.icon );

        case CHANGE_NAME:

            return changeName( action.node, action.name );

        case CHANGE_TEXT:

            return changeText( action.node, action.text );

        default:
            return node;

    }


};


// ----- Helpers -----

    //  Clone => Mutate => Return

    function changeIcon ( node, icon ) {

        let newNode = Object.assign( {}, node );

        newNode.data.icon = icon;

        return newNode;

    }

    function changeName ( node, name ) {

        let newNode = Object.assign( {}, node );

        newNode.data.name = name;

        return newNode;

    }

    function changeText ( node, text ) {

        let newNode = Object.assign( {}, node );

        newNode.data.text = text;

        return newNode;

    }