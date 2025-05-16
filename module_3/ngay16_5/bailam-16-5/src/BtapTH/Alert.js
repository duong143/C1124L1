import React from 'react';

function Alert({ type, message }) {
    const BackgroundColors = () => {
        switch (type) {
            case 'success':
                return '#d4edda';
            case 'warning':
                return '#fde3dd';
            case 'error':
                return '#f8d7da';
            default:
                return '#f0f0f0';
        }
    };

    return (
        <div style={{
            backgroundColor: BackgroundColors(),
            padding: '10px 16px',
            borderRadius: '6px',
            margin: '10px 0',
            border: '1px solid #ccc'
        }}>
            {message}
        </div>
    );
}

export default Alert;
