function EmailInput({ email, onChangeEmail }) {
    return (
        <input
            type="email"
            value={email}
            placeholder="nhập email"
            onChange={(e) => onChangeEmail(e.target.value)}
        />
    );
}

export default EmailInput;
