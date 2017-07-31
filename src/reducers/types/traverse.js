
import { TRAVERSE_TREE } from '../../actions'


export const focus = ( focus = {}, action ) => {


    switch ( action.type ) {

        case TRAVERSE_TREE:

            let id = action.id;

            return Object.assign({}, focus, {

                'id': id

            });

        default:
            return focus

    }


};