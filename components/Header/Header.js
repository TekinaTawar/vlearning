import { FaPhone, FaEnvelope } from "react-icons/fa";
import s from "../../styles/Header.module.scss";
import MiddleSection from "./MiddleSection";

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
      <nav className={s.navBar}>
        <ul>
          <li>
            <a href="#">Video Lectures</a>
            {/* <ul className="level2">
              <li>alskdjfa</li>
              <li>ladsfjaoidf</li>
            </ul> */}
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Faculty</a>
          </li>
          <li>
            <a href="#">Subjects</a>
          </li>
          <li>
            <a href="#">Test Series</a>
          </li>
          <li>
            <a href="#">Free Resources</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
