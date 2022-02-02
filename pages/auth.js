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
      <form className={s.form} action="">
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
        <input type="submit" />
        <div className={s.signInInstead}>
          <p>Already have an Account?</p>
          <Link href="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

Auth.getLayout = (page) => page;

export default Auth;
