
import React         from 'react'
import { getIcon,
         icons,
         iconNames } from '../../js/getIcon'


export class RadialMenu extends React.Component {

    constructor( props ) {

        super( props );

    }

    componentDidMount() {

        let items = document.querySelectorAll( '.circle button' );

        for ( let i = 0, l = items.length; i < l; i++ ) {

            items[ i ].style.left = ( 50 - 80 * Math.cos( -0.5 * Math.PI - 2 * ( 1 / ( 2 * l ) ) * i * Math.PI)).toFixed( 4 ) + "%";

            items[ i ].style.top = ( 50 + 80 * Math.sin( -0.5 * Math.PI - 2 * ( 1 / ( 2 * l ) ) * i * Math.PI)).toFixed( 4 ) + "%";

        }

    }

    render() {

        let type = this.props.type;
        let cb   = this.props.linkClick;

        return (

            <nav className='circular-menu' id={ this.props.type === 'new' ? 'new_radial' : 'details_radial' }>

                <div className="circle">

                    <RadialButton type={ type } cb={ cb } index={ 0 }/>
                    <RadialButton type={ type } cb={ cb } index={ 1 }/>
                    <RadialButton type={ type } cb={ cb } index={ 2 }/>
                    <RadialButton type={ type } cb={ cb } index={ 3 }/>
                    <RadialButton type={ type } cb={ cb } index={ 4 }/>
                    <RadialButton type={ type } cb={ cb } index={ 5 }/>
                    <RadialButton type={ type } cb={ cb } index={ 6 }/>

                </div>

            </nav>

        );

    }

}


function RadialButton ( props ) {

    return <button className="radial_link" onClick={ ( e ) => { e.stopPropagation(); changeButtonIcon( props.type, props.index, props.cb ); } }><img className="radial_icon" src={ icons[ props.index ] } /></button>

}


// ----- Helpers -----

    function changeButtonIcon ( type, index, cb ) {

        let icon = iconNames[ index ];

        type == 'new' ? changeNewIcon( icon ) : cb( icon );

    }

    function changeNewIcon( icon ) {

        // Store icon's name as button's ID
            let btn = document.getElementsByClassName( 'new_icon_button' )[ 0 ];
            btn.id  = icon;

        // Set image's src to icon
            let img = document.getElementById( 'new_icon_button_icon' );

        // Style button image
            img.src = getIcon( icon );
            img.style.opacity = 1;

    }



