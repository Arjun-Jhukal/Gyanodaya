import { Link, useParams } from "react-router-dom";
const Recent = ({ data }) => {
  const currentItem = useParams();
  const filteredBlogItems = data.filter((item) => item.id !== parseInt(currentItem));
  return (
    <div className="aside__box">
      <h5 className="sm_heading">Recent Blog</h5>
      {filteredBlogItems.slice(0, 3).map((item, index) => {
        return (
          <div className="aside__box__item" key={index}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="title">
              <Link to={`/blog/${index}`}>{item.title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recent;
