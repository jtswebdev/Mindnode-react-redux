
import React from 'react'
import Node  from './Node'


export class VisibleNodes extends React.Component {

    constructor( props ) {

        super( props );

    }

    componentDidMount() {

        if ( !this.props.editState ) {

            let childNodes = document.querySelectorAll( '.node.child' );
            let increment = 50;

            let isSmall = checkMediaQuery();

            for ( let i = 0, l = childNodes.length; i < l; i++ ) {

                let transformString = calcTransform( l, i, isSmall );

                setTimeout( function () {

                    childNodes[ i ].style.opacity = 1;
                    childNodes[ i ].style.transform = transformString;

                }, increment);

                increment += 50;

            }

        }

    }

    render() {

        let props       = this.props,

            nodeGroup   = props.nodeGroup,
            onNodeClick = props.onNodeClick,
            nameChange  = props.nameChange,
            editState   = props.editState,
            showDetails = props.showDetails;

        return (

            <div id="tree_wrap">

                {
                    showDetails ? null :

                    <div className="unfocused">
                        <ParentNode node= { nodeGroup[ 'parentNode' ] } onParentClick={ onNodeClick }/>
                        <JumpToNode node= { nodeGroup[ 'jumpToNode' ] } onJumpToClick={ onNodeClick }/>
                        <ChildNodes nodes={ nodeGroup[ 'childNodes' ] } onChildClick= { onNodeClick }/>
                    </div>

                }

                <FocusNode node={ nodeGroup[ 'focusNode' ]  } showDetails={ showDetails } editState={ editState } onNameChange={ nameChange } onFocusClick={ onNodeClick } />

            </div>


        )

    }

}


// Node Types

    export const FocusNode = ({ node, onNameChange, onFocusClick, showDetails, editState }) => {

        let focusClass  = showDetails ? "node_wrap expanded" : "node_wrap";
        let currentType = showDetails ? "focus expanded" : "focus";
        currentType = editState ? "focus expanded editable" : currentType;
        let nodeName    = node.data.name;

        return (

            <div className={ focusClass } id="focus_wrap">
                <Node id={ node.id } name={ nodeName } icon={ node.data.icon } type={ currentType } model={ node } editState={ editState } onNameChange={ onNameChange } onClick={ () => { onFocusClick( node.id, 'focus' ) } }/>
            </div>

        )

    };

    export const ChildNodes = ({ nodes, onChildClick }) => {

        return (

            nodes.length > 0 ?

            <div className="children_wrapper">

                {
                    nodes.map( ( node, index ) => (

                        <div className="node_wrap" id={ "child_wrap" + node.id } key={ index }>
                            <Node id={ node.id } name={ node.data.name } icon={ node.data.icon } type="child" onClick={ () => { onChildClick( node.id, 'child' ); } }/>
                        </div>

                    ))
                }

            </div>
            : <div className="no_children" />

        )

    };

    export const ParentNode = ({ node, onParentClick }) => {

        return (

            node ?

            <div className="node_wrap" id="parent_wrap">
                <Node id={ node.id } name={ node.data.name } icon={ node.data.icon } type="parent" onClick={ () => { onParentClick( node.id, 'parent' ); } } />
            </div>
            : null

        )

    };

    export const JumpToNode = ({ node, onJumpToClick }) => {

        return (

            node ?

            <div className="node_wrap" id="jumpTo_wrap">
                <Node id={ node.id } name={ node.data.name } icon={ node.data.icon } type="jumpTo" onClick={ () => onJumpToClick( node.id, 'jumpTo' ) } />
            </div>
            : null

        )

    };


// Child Placement Helpers

    function calcTransform( l, i, isSmall ) {

        return leftTransform( l, i, isSmall ) + topTransform( l, i, isSmall );

    }

    function leftTransform( l, i, isSmall ) {

        let radius = isSmall ? 250 : 350;

        let percent = ( radius * Math.cos( -0.5 * Math.PI - 2 * ( 1 / ( 1 * l ) ) * i * Math.PI )).toFixed( 4 ) + "%";

        return "translateX(" + percent + ")";

    }

    function topTransform( l, i, isSmall ) {

        let radius = isSmall ? 300 : 350;

        let percent = ( radius * Math.sin( -0.5 * Math.PI - 2 * ( 1 / ( 1 * l ) ) * i * Math.PI )).toFixed( 4 ) + "%";

        return " translateY(" + percent + ")";

    }


// Check screen size to determine radius for child placement

    function checkMediaQuery() {

        let mq = window.matchMedia( "(max-width: 599px)" );

        return mq.matches;

    }
