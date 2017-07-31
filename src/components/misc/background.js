
import React                 from 'react'
import store                 from '../../index'
import saveState             from '../../js/storage'
import NewCont               from '../../containers/widgets/NewNodeContainer'
import DetailsCont           from '../../containers/widgets/DetailsContainer'
import { NodeContainer,
         NodeContainer_Alt } from '../../containers/nodes/NodeTypeContainer'


class AppBackground extends React.Component {

    constructor( props ) {

        super( props );

        this.state = { width:        props.width,
                       height:       props.height,
                       showNew:      props.showNew,
                       showDetails:  props.showDetails,
                       clickCall:    props.onBackClick,
                       currentFocus: props.currentFocus,
                       focusChange:  false };

        store.subscribe(() => {

            this.setState({

                showDetails:  store.getState().toggles.showDetails,
                currentFocus: store.getState().focus[ 'id' ],
                focusChange:  !this.state.focusChange,

            });


        })

    }

    componentDidMount() {

        window.addEventListener( "resize", this.updateDimensions );
        window.appBackground = this;

    }

    componentWillMount() {

        this.setState({ height: window.innerHeight + 'px' });
        this.setState({ width:  window.innerWidth  + 'px' });

    }

    componentWillUnmount() {

        window.removeEventListener( "resize", this.updateDimensions );

    }

    updateDimensions( e ) {

        e.target.appBackground.setState({  width:  window.innerWidth  + 'px',
                                           height: window.innerHeight + 'px'  });

    }

    backClicked() {

        let newComponentVis     = this.state.showNew,
            detailsComponentVis = this.state.showDetails;

        this.state.showNew = detailsComponentVis ? newComponentVis : !newComponentVis;

        this.state.clickCall( this.state.showDetails );

    }

    render() {

        let divStyle = {

            backgroundColor: 'lightgray',
            height: this.state.height,
            width: this.state.width

        };

        let didChange = this.state.focusChange;

        return (


            <div className="app_background" style={ divStyle } onClick={ () => { this.backClicked() } }>
                <div id="reference">
                    <div id="relative">
                        { this.state.showDetails ? <DetailsCont /> : null }
                        { this.state.showNew && !this.state.showDetails ? <NewCont /> : didChange ? <NodeContainer />:<NodeContainer_Alt /> }
                    </div>
                </div>
            </div>
        )

    }

}

// { this.state.showDetails ? <DetailsCont /> : null }


export default AppBackground