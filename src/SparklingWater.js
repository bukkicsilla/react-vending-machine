import { Link } from "react-router-dom";
import Text from "./Text";
const SparklingWater = () => {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/37QGsYyVuSKZdhd2IF"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Text>
        <h2>It makes your day</h2>
        <Link className="back" to="/">
          Go back
        </Link>
      </Text>
    </div>
  );
};
export default SparklingWater;
