import { useState } from "react";

function FormSimple() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        console.log("Thông tin đăng nhập:", formData);
    };

    return (
        <div>
            <h1>Form Simple</h1>
            <form onSubmit={handleOnSubmitForm}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default FormSimple;
