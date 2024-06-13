import { Link } from "react-router-dom";
import Text from "./Text";
const DietCoke = () => {
  return (
    <div>
      <iframe
        className="giphy-embed"
        src="https://giphy.com/embed/DDbmZoOOn0KWFdRmvL"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Text>
        <h2>Diet Coke is refreshing</h2>
        <Link className="back" to="/">
          Go back
        </Link>
      </Text>
    </div>
  );
};
export default DietCoke;
