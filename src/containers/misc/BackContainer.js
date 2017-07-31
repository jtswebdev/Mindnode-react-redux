
import { connect }               from 'react-redux'
import { handleBackgroundClick } from '../../actions'
import AppBackground             from '../../components/misc/background'


const mapStateToProps = state => {

    return {
             showNew:      state.toggles.showNew,
             showDetails:  state.toggles.showDetails,
             currentFocus: state.focus[ 'id' ]
            }

};

const mapDispatchToProps = dispatch => {

    return {

        onBackClick: ( detailsVis )  => {

            dispatch( handleBackgroundClick( detailsVis ) )

        },


    }

};


const BackCont = connect(

    mapStateToProps,
    mapDispatchToProps

)( AppBackground );


export default BackCont