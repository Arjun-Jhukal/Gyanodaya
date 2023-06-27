import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";

import { FaShare } from "react-icons/fa";
import image from "../assets/img/01.jpg";

const ProgramDetailPage = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  return (
    <Layout>
      <div className="blog__detail section__gap mb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="blog__detail__header">
                <h1 className="md_heading">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aut esse nemo quod a, eligendi numquam optio dignissimos,
                </h1>
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
              <div className="blog__detail__text">
                <img src={image} alt="" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, veritatis. Temporibus deserunt maxime accusantium doloribus quidem
                  porro autem officia molestias. Dolorem adipisci, consequatur rerum hic iusto ab mollitia laborum eius!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, veritatis. Temporibus deserunt maxime accusantium doloribus quidem
                  porro autem officia molestias. Dolorem adipisci, consequatur rerum hic iusto ab mollitia laborum eius!
                </p>

                <em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur facilis maxime pariatur explicabo, ratione totam tempore
                  natus molestiae beatae eaque dolore sit et quasi voluptates impedit consequatur nobis iure!
                </em>

                <h1 className="sm_heading">Lorem ipsum dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos mollitia vero, accusamus voluptatem quia numquam saepe, quasi,
                  repellendus voluptate iste dolore corrupti non soluta esse pariatur veniam dolores? Beatae, eum!
                </p>

                <h1 className="sm_heading">Lorem ipsum dolor sit amet.</h1>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-12">Aside</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetailPage;
