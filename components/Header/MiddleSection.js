import Image from "next/image";
import s from "../../styles/MiddleSection.module.scss";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

import SearchWidget from "./SearchWidget";
const MiddleSection = () => {
  const loggedin = false;
  return (
    <div className={s.sec2}>
      <div className={s.logo}>
        <Image src="/logo.png" alt="logo" width={153} height={40} />
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
          <div className={s.signupButton}> SignUp</div>
          <div className={s.loginButton}>Login</div>
        </>
      )}

      {/* <div>
        <a href="https://admin-vlearning.herokuapp.com/admin">Admin Login</a>
      </div> */}
    </div>
  );
};

export default MiddleSection;
