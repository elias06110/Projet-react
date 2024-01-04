import jsonData from "../../file.json";
import Collapse from "../collapse/collapse";
import { useParams } from "react-router-dom";

const Specs = () => {
  const { id } = useParams();
  const dataAppartment = jsonData.filter((data) => data.id === id);
  const description = dataAppartment[0].description;
  const equipments = dataAppartment[0].equipments;

  return (
    <div>
      <div className="accomodation_collapse">
        <div className="accomodation_collapse_item">
          <Collapse title={"Description"} content={description} />
        </div>
        <div className="accomodation_collapse_item">
          <Collapse title={"Équipements"} content={equipments} />
        </div>
      </div>
    </div>
  );
};

export default Specs;
