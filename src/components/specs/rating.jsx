import redStar from "../../images/star-red.png"
import greyStar from "../../images/star-grey.png"
import { useParams } from "react-router-dom";
import jsonData from '../../file.json'



function Rating() {

  const idAccomodation = useParams('id').id;
	const dataAppartment = jsonData.filter(data => data.id === idAccomodation);
  const rating = dataAppartment[0].rating;

  return (
    <div className="logement_infos_stars">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <img
            key={index}
            src={ratingValue <= rating ? redStar : greyStar}
            alt="star"
          />
        );
      })}
    </div>
  );
}

export default Rating
