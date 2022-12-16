import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

function Label(props){
  return(
    <div class="form-group">
        <label for={props.name}>{props.title}</label>
    </div>
  )
}

export default Label