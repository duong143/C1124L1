import { useState } from 'react';
import EmailInput from "./EmailInput";

function NewLettersForm() {
    let [email, setEmail] = useState("");

    const handEmailChange = (newEmail) => {
        setEmail(newEmail);
    }

    const handSubmitForm = () => {alert(`Email đã đăng kí là : ${email}`)}
    return (
        <div>
            <h3>đăng kí nhận tin</h3>
            <EmailInput onChangeEmail={handEmailChange} email={email}/>
            <button onClick={handSubmitForm}>Gửi</button>
        </div>
    )
} export default NewLettersForm