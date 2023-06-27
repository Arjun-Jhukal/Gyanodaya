import { Link } from "react-router-dom";
const ContactBoxSingle = ({ icon, value }) => {
  return (
    <div className="contact__box__item">
      {icon}
      <Link to={`tel:${value}`}> {value}</Link>
    </div>
  );
};

export default ContactBoxSingle;
