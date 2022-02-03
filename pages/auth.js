import Image from "next/image";
import s from "../styles/auth.module.scss";
import coverImage from "../public/images/bookBackground.jpg";
import whiteLogo from "../public/images/VLearningWhite.svg";
import Link from "next/link";
const Auth = () => {
  return (
    <div className={s.container}>
      {/* background image  */}
      <div className={s.imageContainer}>
        <Image src={coverImage} layout="fill" objectFit="cover" />
      </div>
      {/* left Side logo */}
      <div className={s.logo}>
        <Image src={whiteLogo} width={180} height={50} />
        <h3>Sign in or create an account.</h3>
      </div>
      {/* right side form  */}

      {true ? (
        <form className={s.signUpForm} action="">
          <h1> Sign Up</h1>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" id="userName" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="cofirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <input type="submit" value="Sign Up"/>
          <div className={s.signInInstead}>
            <p>Already have an Account?</p>
            <Link href="/signin">Sign In</Link>
          </div>
        </form>
      ) : (
        <form className={s.signInForm} action="">
          <h1> Sign In</h1>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <input type="submit" value="Sign In"/>
          <div className={s.signUpInstead}>
            <p>New User?</p>
            <Link href="/signin">Create an account</Link>
          </div>
        </form>
      )}
    </div>
  );
};

Auth.getLayout = (page) => page;

export default Auth;
