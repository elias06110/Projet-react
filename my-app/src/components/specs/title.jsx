import jsonData from "../../file.json";
import { useParams } from "react-router-dom";
import Rating from "../specs/rating";

const Title = () => {
  const { id } = useParams();
  const dataAppartment = jsonData.filter((data) => data.id === id);
  const title = dataAppartment[0].title;
  const location = dataAppartment[0].location;
  const hostName = dataAppartment[0].host.name.split(" ");
  const hostPicture = dataAppartment[0].host.picture;

  return (
    <div className="logement_infos">
      <div>
        <h1 className="red">{title}</h1>
        <p className="red">{location}</p>
        <div className="logement_infos_tags_container">
          {dataAppartment[0].tags.map((tag, index) => {
            return (
              <div className="logement_infos_tags" key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
      <div className="host">
        <div className="name">
          <div className="name_column">
          <span>{hostName[0]}</span>
          <span>{hostName[1]}</span>
          </div>
          <img className="host_picture" src={hostPicture} alt={hostName}></img>
        </div>
        <Rating></Rating>
      </div>
    </div>
  );
};

export default Title;
