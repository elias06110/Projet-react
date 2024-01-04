import jsonData from "../../file.json";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="grid">
      <div className="grid_appartements">
        {jsonData.map((datas, index) => {
          return (
            <div key={index}>
              <Link className="decoration" to={`/logement/${datas.id}`}>
                <div className="square" id={datas.id}>
                  <img
                    src={datas.cover}
                    alt="appartement"
                  ></img>
                  <h3>{datas.title}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
