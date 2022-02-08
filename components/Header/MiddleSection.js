import Image from "next/image";
import Link from "next/link";
import s from "../../styles/MiddleSection.module.scss";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

import SearchWidget from "./SearchWidget";
const MiddleSection = () => {
  const loggedin = false;
  return (
    <div className={s.sec2}>
      <div className={s.logo}>
        <Image src="/logofull.png" alt="logo" width={153} height={40} />
      </div>
      <SearchWidget />
      {loggedin ? (
        <>
          <div className={s.profile}>
            <FaUserCircle size={22} />
          </div>
          <div className={s.cart}>
            <FaShoppingCart size={22} />
          </div>
        </>
      ) : (
        <>
          <Link href="/auth?q=signup">
            <a className={s.signupButton}> SignUp</a>
          </Link>
          <Link href="/auth?q=signin">
            <a className={s.loginButton}>Login</a>
          </Link>
        </>
      )}

      {/* <div>
        <a href="https://admin-vlearning.herokuapp.com/admin">Admin Login</a>
      </div> */}
    </div>
  );
};

export default MiddleSection;
