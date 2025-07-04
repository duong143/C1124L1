import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <div>
      <h1>Login form</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="button" onClick={() => router.push("/")}>Login</button>
      </form>
    </div>
  );
}
