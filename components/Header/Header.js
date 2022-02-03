import { FaPhone, FaEnvelope } from "react-icons/fa";
import s from "../../styles/Header.module.scss";
import MiddleSection from "./MiddleSection";
import Navbar from "./Nav";
const Header = () => {
  return (
    <header className={s.header}>
      {/* contactInfoSection */}
      <div className={s.sec1}>
        <div>
          <h5>Have any question?</h5>
          <h5>
            <FaPhone /> (+91) 8090070073{" "}
          </h5>
          <h5>
            <FaEnvelope /> info@vvlearnings.com
          </h5>
        </div>
      </div>

      {/* logo&search&userlink Section */}
      <MiddleSection />

      {/* Navbar */}
      <Navbar />

    </header>
  );
};

export default Header;
