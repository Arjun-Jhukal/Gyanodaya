import { FaPhone, FaEnvelopeOpenText, FaLocationArrow } from "react-icons/fa";
import ContactBoxSingle from "./ContactBoxSingle/ContactBoxSingle";

const ContactBox = () => {
  return (
    <div className="contact__box">
      <ContactBoxSingle icon={<FaPhone />} value={"+977 9812767046"} />
      <ContactBoxSingle icon={<FaEnvelopeOpenText />} value={"connectjhukal9@gamil.com"} />
      <ContactBoxSingle icon={<FaLocationArrow />} value={"New Baneshwor, Kathmandu 44600 Nepal"} />
    </div>
  );
};

export default ContactBox;
