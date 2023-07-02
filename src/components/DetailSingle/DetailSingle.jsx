import { useParams } from "react-router-dom";

const DetailSingle = ({ data }) => {
  const { id } = useParams();
  const currentitem = data[id];
  const isNotice = currentitem.hasOwnProperty("download");

  return isNotice ? (
    <>
      <div className="blog__detail__header">
        <h1 className="md_heading">{currentitem.title}</h1>
        <div className="blog__info">
          <span className="date">{currentitem.date}</span>
        </div>
      </div>
      <div className="blog__detail__text">
        <img src={currentitem.image} alt={currentitem.title} />

        <p>{currentitem.brief}</p>
      </div>
    </>
  ) : (
    <>
      <div className="blog__detail__header">
        <h1 className="md_heading">{currentitem.title}</h1>
        <div className="blog__info">
          <span className="date">{currentitem.date}</span>
        </div>
      </div>
      <div className="blog__detail__text">
        <img src={currentitem.image} alt={currentitem.title} />

        <p>{currentitem.brief}</p>

        <em>{currentitem.quote}</em>

        <h1 className="sm_heading">{currentitem.subTitle}</h1>
        <p>{currentitem.brief_02}</p>

        <h1 className="sm_heading">{currentitem.subTitle_01}</h1>
        <ul>
          {currentitem.list.map((listItem, index) => {
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default DetailSingle;
