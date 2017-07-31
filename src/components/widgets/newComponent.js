
import React          from 'react'
import { getIcon }    from '../../js/getIcon'
import { RadialCont } from '../../containers/misc/RadialContainer'


export const NewComponent = ({ focusId, iconButtonClick, confirmButtonClick }) => {

    setTimeout( function () {

        document.querySelector('.new_widget_circle').classList.toggle('open');
        document.querySelector('.text_button_icon').classList.toggle('sliding');

    }, 100 );

    setTimeout( function() {

        document.querySelector('.slide').classList.toggle('go');

    }, 100 );

    setTimeout( function() {

        document.querySelector('.text_button_icon').classList.toggle('sliding');

    }, 1200 );

    return (

            <div className="new_widget_circle">
                <div className="slide">
                    <Button index={ 0 } clickAction={ ( e ) => {  e.preventDefault(); e.stopPropagation(); launchMenu(); iconButtonClick(); } } />
                    <Button index={ 3 } clickAction={ ( e ) => { e.stopPropagation(); launchTextArea() } } />
                    <TextArea />
                    <Button index={ 1 } clickACtion={ ( e ) => {} } />
                    <TextInput className={ "new_name" } />
                    <Button index={ 2 } clickAction={ () => collectValues( focusId, confirmButtonClick ) } />
                </div>
            </div>

    )

};



let classes = [ 'new_icon', 'cancel', 'confirm', 'text' ];
let icons   = [ 'image', 'close', 'check', 'text' ];


// --- Base Components ---

    const Button = ({ index, clickAction }) => {

        let thisClass = classes[ index ],
            thisIcon  = icons[ index ];

        return (

            <button className={ thisClass + "_button" } id={ thisIcon } onClick={ clickAction }>
                {
                    index === 0 ? <RadialCont type={ 'new' } /> : null
                }
                <Image className={ thisClass } iconName={ thisIcon } />
            </button>

        );

    };

    const Image = ({ className, iconName }) => {

        return (

            <img className={ className + "_button_icon" } id={ className + "_button_icon" } alt="" src={ getIcon( iconName ) } />

        )
    };

    const TextInput = ({ className }) => {

        let defaultVal = className === "new_name" ? "Name" : "Text";

        return (

            <div className={ className + "_wrap" }>
                <form className={ className + "_form" }>
                    <input className={ className + "_input" } type="text" onClick={ ( e ) => e.stopPropagation() } placeholder={ defaultVal } />
                </form>
            </div>

        )
    };

    const TextArea = () => {

        return (

            <div className="new_text_area_wrap">
                <textarea className="new_text_area" rows="5" cols="30" onClick={ ( e ) => e.stopPropagation() } placeholder="Text"></textarea>
            </div>

        )

    };


// ----- Helpers -----

    // Text Area
        const launchTextArea = () => {

            document.querySelector( '.text_button' ).classList.toggle( 'open' );
            document.querySelector( '.new_text_area_wrap' ).classList.toggle( 'open' );

        };

    // Radial Menu
        const launchMenu = () => {

            document.querySelector( '.new_icon_button' ).classList.toggle( 'open' );
            document.querySelector( '.circle' ).classList.toggle( 'open' );

        };

        const collectValues = ( focusId, confirmButtonClick ) => {

            let name = document.getElementsByClassName( 'new_name_input' )[ 0 ].value;
            let text = document.getElementsByClassName( 'new_text_area' )[ 0 ].value;
            let btn  = document.getElementsByClassName( 'new_icon_button' )[ 0 ];

            confirmButtonClick( name, text, btn.id, focusId );

        };