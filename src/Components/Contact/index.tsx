import { Input } from "../Input";
import "./styles.scss";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <div className="container-contact">
      <div className="contact">
        <h1>Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="contact-icons">
          <p>
            <FaEnvelope /> shopstyle@email.com
          </p>
          <p>
            <FaPhoneAlt /> (99) 0000-0000
          </p>
          <p>
            <FaMapMarkerAlt /> 123 Sample St, Sydney NSW 2000 AU
          </p>
        </div>
      </div>
      <div className="mensage">
        <p>Name</p>
        <Input />
        <p>Email</p>
        <Input />
        <p>Message</p>
        <Input text="Type your message..." />
      </div>
    </div>
  );
}