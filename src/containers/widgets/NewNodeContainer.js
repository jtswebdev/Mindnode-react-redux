
import { connect }              from 'react-redux'
import { NewComponent }         from '../../components/widgets/newComponent'
import { createNode,
         addChild,
         handleNewIconButton,
         handleCancelButton   } from '../../actions'


const mapStateToProps = state => {

    let focusId = state.focus[ 'id' ];

    return {

            focusId: focusId

           }

};

const mapDispatchToProps = dispatch => {

    return {

        iconButtonClick: ()  => {

            dispatch( handleNewIconButton() )

        },

        confirmButtonClick: ( nameVal, textVal, icon, parent ) => {

            dispatch( createNode( nameVal, textVal, icon, parent ) );
            dispatch( addChild( parent ) );

        },

        cancelButtonClick: () => {

            dispatch( handleCancelButton() )

        }



    }

};


const NewCont = connect(

    mapStateToProps,
    mapDispatchToProps

)( NewComponent );


export default NewCont