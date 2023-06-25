import album01 from "../../assets/img/01.jpg";
const AlbumSingle = () => {
  return (
    <div className="album section__gap">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-4">
            <div className="album__item">
              <img src={album01} alt="" />

              <div className="album__item__text">
                <h1 className="sm_heading">Album 01</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSingle;
