import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

function ContactForm() {
    return (
        <form style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Form Liên Hệ</h2>
            <InputField label="Tên" type="text" id="name" />
            <InputField label="Email" type="email" id="email" />
            <InputField label="Tin nhắn" type="text" id="message" />
            <SubmitButton text="Gửi" />
        </form>
    );
}

export default ContactForm;
