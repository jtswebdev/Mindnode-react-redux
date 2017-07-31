
import React       from 'react'
import { getIcon } from '../../js/getIcon'


const Node = ({ model, id, name, icon, type, editState, onNameChange, onClick }) => {


    return (

      <div id={ 'node_' + id } className={ "node " + type } onClick={ ( e ) => { onClick(); e.stopPropagation(); }}>

          <img className={ "node_icon " + type } src={ getIcon( icon ) } />
          <div className="node_name_wrap">
            <input className="node_name" type="text" defaultValue={ name } ref={ ( ref ) => { this.nameInput = ref } } onBlur={ () => { onNameChange( model, this.nameInput ) } } onClick={ ( e ) => e.stopPropagation() } readOnly={ !editState } />
          </div>
      </div>

    )


};


export default Node