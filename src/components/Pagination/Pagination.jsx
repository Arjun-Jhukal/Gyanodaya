import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="disabled">
        <FaArrowLeft />
      </li>
      <li className="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>
        <FaArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
