
import { connect }              from 'react-redux'
import { RadialMenu }           from '../../components/misc/radialMenu'
import { handleSelectionClick } from '../../actions'


const mapStateToProps = state => {

    return {}

};

const mapDispatchToProps = dispatch => {

    return {

        linkClick: ( icon )  => {

            dispatch( handleSelectionClick( icon ) )

        }


    }

};


export const RadialCont = connect(

    mapStateToProps,
    mapDispatchToProps

)( RadialMenu );