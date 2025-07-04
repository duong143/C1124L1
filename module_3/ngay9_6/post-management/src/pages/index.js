import { useState } from "react";
import {useRouter} from "next/router";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username.trim()){
            localStorage.setItem("username", username);
            router.push("/dashboard");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="What's your name?"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Submit name</button>
            </form>
        </div>
    );
}