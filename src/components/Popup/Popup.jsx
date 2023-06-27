import { useEffect, useState } from "react";
import popup from "../../assets/img/03.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Popup = () => {
  const [popupStatus, setPopupStatus] = useState(true);
  let [popupTime, setPopupTime] = useState(8);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (popupTime === 0) {
        setPopupStatus(false);
      } else {
        setPopupTime(--popupTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [popupTime]);

  return (
    <div className={popupStatus ? "popup active" : "popup"}>
      <div className="popup__content">
        <button className="popup__close" onClick={() => setPopupStatus(false)}>
          <AiOutlineClose />
        </button>
        <img src={popup} alt="" />
        <div className="popup__skip">
          Auto Skip in <span>{popupTime} Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
