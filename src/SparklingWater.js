import { Link } from "react-router-dom";
const SparklingWater = () => {
  return (
    <div>
      <h2>Sparkling Water makes your day</h2>
      <iframe
        src="https://giphy.com/embed/37QGsYyVuSKZdhd2IF"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <div className="back">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
export default SparklingWater;
