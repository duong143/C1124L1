import React from 'react';


function SubmitButton(props) {
    return (
        <button className="submit-button-static" >
            {props.text}
        </button>
    );
}

export default SubmitButton;
