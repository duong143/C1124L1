import React from 'react';

function SubmitButton(props) {
    return (
        <button
            className="submit-button-static"
            disabled
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'not-allowed'
            }}
        >
            {props.text}
        </button>
    );
}

export default SubmitButton;
