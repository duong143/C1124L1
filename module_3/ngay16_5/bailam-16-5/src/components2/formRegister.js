import React from 'react';
import InputField from './inputField';
import SubmitButton from './submitButton';
import './formRegister.css';

function FormRegister() {
    return (
        <form>
            <InputField label="Name" type="text" id="name" />
            <InputField label="Email" type="email" id="email" />
            <InputField label="Password" type="password" id="password" />
            <SubmitButton text="Register" />
        </form>
    );
}

export default FormRegister;
