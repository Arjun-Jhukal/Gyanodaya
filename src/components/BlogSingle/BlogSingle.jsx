import SectionTitle from "../SectionTitle/SectionTitle";
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import blog from "../../assets/img/19.jpg";
import { useState } from "react";
const BlogSingle = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const totalItems = Array.from({ length: 15 });
  return (
    <div className="blog ">
      <div className="container">
        <SectionTitle subTitle={"Our Blogs"} title={"Views and Ideas from Our Students and Teachers"} />
        <div className="row">
          {totalItems.map((item, index) => {
            return (
              <div className="col-lg-4 col-12" key={index}>
                <div className="blog__image">
                  <img src={blog} alt="" />
                </div>
                <Link to={`/blog/${index}`} className="sm_heading">
                  Why Is It I Can Never Think Of Anything Good To Make For Supper
                </Link>
                <div className="blog__info">
                  <span className="date">2024-02-02</span>

                  <ul className="action__box">
                    <li>
                      {!likeStatus ? <AiOutlineHeart /> : <AiFillHeart />}
                      <span>165k</span>
                    </li>
                    <li>
                      <AiOutlineComment />
                      <span>30</span>
                    </li>
                    <li>
                      <FaShare />
                      <span>10</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
