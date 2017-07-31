

import React, { Component } from 'react'
import { getIcon }          from '../../js/getIcon'
import { RadialCont }       from '../../containers/misc/RadialContainer'


export const DetailsComponent = ({ currentFocus, editState, textChange, onEditClick, onDeleteClick }) => {

    return (


        <div className="details_widget_back">
            <div className="details_ui">
            <Button index={ 1 } className={ editState ? "edit_toggle close" : "edit_toggle" } editActive={ editState } clickAction={ ( e ) => {  e.preventDefault(); e.stopPropagation(); onEditClick( e ); launchMenu(); } } />
            <RadialCont type={ "details" } />
            <TextArea editState={ editState } currentFocus={ currentFocus } callback={ textChange } />
            {
                editState && currentFocus.id !== 0 ?
                    <Button index={ 0 } className={ "delete_button" } clickAction={ () => onDeleteClick( currentFocus ) } /> : null
            }
            </div>
        </div>

    )

};



// --- Base Components ---

    const Button = ({ index, className, clickAction, editActive }) => {

        return (

            <button className={ className } onClick={ clickAction }>
                <Image index={ index } editState={ editActive } />
            </button>

        );

    };

    const Image = ({ index, editState }) => {

        let imgClass = index === 0 ? "delete" : "edit";
        let iconName = 'delete';

        if ( index === 1 ) { iconName = editState ? "check" : "menu" }

        return (

            <img className={ imgClass + "_icon" } alt="" src={ getIcon( iconName ) } />

        )

    };

    const TextArea = ({ editState, currentFocus, callback }) => {

        let wrapClass = editState ? "details_text_area_wrap open" : "details_text_area_wrap";
        let textClass = editState ? "details_text_area editable" : "details_text_area";

        return (

            <div className={ wrapClass }>

                <textarea rows="5" cols="30" placeholder='Text'
                          className={ textClass }
                          onClick={ ( e ) => e.stopPropagation() }
                          defaultValue={ currentFocus.data.text }
                          onBlur={ () => callback( this.textInput, currentFocus ) }
                          readOnly={ !editState }
                          ref={ ( ref ) => { this.textInput = ref } } />

            </div>

        )

    };


// ----- Helpers -----

    const launchMenu = () => {

        document.querySelector( '.circle' ).classList.toggle( 'open' );

    };
