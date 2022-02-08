import s from "../../styles/auth.module.scss";
import Link from "next/link";

import { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    
  };

  return (
    <>
      <form className={s.signInForm} onSubmit={submitForm}>
        <h1> Sign In</h1>
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
        <input type="submit" value="Sign In" />

        <div className={s.signUpInstead}>
          <p>New User?</p>
          <Link href="/auth?q=signup">
            <a>Create an account</a>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
