
import { connect }         from 'react-redux'
import { VisibleNodes }    from '../../components/nodes/NodeTypes'
import { updateName,
         handleNodeClick } from '../../actions'


const getNodeObj          = ( id, nodes ) => {

    return nodes[ id ];

};

const getChildNodeObjects = ( idArray, nodes ) => {

    let nodeArray = [];

    for ( let nodeId of idArray ) {

        nodeArray.push( nodes[ nodeId ] )

    }

    return nodeArray;

};


const mapStateToProps = state => {

    // Focus Node
        let toFocus  = getNodeObj( state.focus[ 'id' ], state.nodes );

    // Parent Node
        let toParent = toFocus.parent !== 'none' ? getNodeObj( toFocus.parent, state.nodes ) : '';

    // Return to Root Node
        let toJumpTo = toFocus.id !== 0 && toParent.id !== 0 ? getNodeObj( 0, state.nodes ) : '';

    // Child Nodes
        let toChild  = getChildNodeObjects( toFocus.children, state.nodes );


    return {

            showDetails:  state.toggles.showDetails,
            editState:    state.toggles.editActive,
            nodeGroup: {
                          focusNode:  toFocus,
                          parentNode: toParent,
                          jumpToNode: toJumpTo,
                          childNodes: toChild
                        }

           }

};

const mapDispatchToProps = dispatch => {

    return {

        onNodeClick: ( id, nodeType ) => {

            dispatch( handleNodeClick( id, nodeType ) )

        },

        nameChange: ( node, el ) => {

            dispatch( updateName( node, el.value ) )

        },

    }

};


export const NodeContainer = connect(

    mapStateToProps,
    mapDispatchToProps

)( VisibleNodes );


export const NodeContainer_Alt = connect(

    mapStateToProps,
    mapDispatchToProps

)( VisibleNodes );