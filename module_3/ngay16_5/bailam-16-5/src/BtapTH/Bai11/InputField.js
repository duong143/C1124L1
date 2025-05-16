import React from 'react';

function InputField(props) {
    return (
        <div className="input-group-static" style={{ marginBottom: '12px' }}>
            <label htmlFor={props.id}>{props.label}:</label>
            <input
                type={props.type}
                id={props.id}
                readOnly
                style={{ marginLeft: '8px', padding: '6px', width: '250px' }}
            />
        </div>
    );
}

export default InputField;
