import React from 'react';
import InputBox from './InputBox';

function SearchBar({ onKeywordChange }) {
    return (
        <div>
            <InputBox onInputChange={onKeywordChange} />
        </div>
    );
}

export default SearchBar;
