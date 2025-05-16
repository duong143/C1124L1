import React from 'react';


function InputField(props) {
    return (
        <div className="input-group-static">
            <label htmlFor={props.id}>{props.label}:</label>
            <input type={props.type} id={props.id}  />
        </div>
    );
}

export default InputField;
