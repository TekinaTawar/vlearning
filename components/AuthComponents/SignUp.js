import s from "../../styles/auth.module.scss";
import Link from "next/link";

import { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: userName,
      }),
    });
    console.log(res);
  };
  return (
    <form className={s.signUpForm} onSubmit={submitForm}>
      <h1> Sign Up</h1>
      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="cofirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <input type="submit" value="Sign Up" />

      <div className={s.signInInstead}>
        <p>Already have an Account?</p>
        <Link href="/auth?q=signin">
          <a>Sign In</a>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
