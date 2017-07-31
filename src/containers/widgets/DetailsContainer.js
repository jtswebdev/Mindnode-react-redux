
import { connect }          from 'react-redux'
import { DetailsComponent } from '../../components/widgets/detailsComponent'
import { handleEditClick,
         handleNodeClick,
         deleteNode,
         removeChild,
         updateText       } from '../../actions/'



const getNodeObj = ( id, nodes ) => {

    return nodes[ id ];

};


const mapStateToProps = state => {

    let focusNode = getNodeObj( state.focus[ 'id' ], state.nodes );

    return {

             currentFocus: focusNode,
             editState:    state.toggles.editActive

           }

};

const mapDispatchToProps = dispatch => {

    return {

        onEditClick: ( e )  => {

            dispatch( handleEditClick( e ) )

        },

        onDeleteClick: ( node ) => {

            let parentId = node.parent;

            dispatch( deleteNode( node.id ) );
            dispatch( removeChild( parentId, node.id ) );
            dispatch( handleNodeClick( parentId, 'parent' ) );

        },

        textChange: ( el, node ) => {

            dispatch( updateText( node, el.value ) )

        }


    }

};


const DetailsCont = connect(

    mapStateToProps,
    mapDispatchToProps

)( DetailsComponent );


export default DetailsCont