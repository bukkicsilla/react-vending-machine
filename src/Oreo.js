import { Link } from "react-router-dom";
import Text from "./Text";
const Oreo = () => {
  return (
    <div>
      <iframe
        className="giphy-embed"
        src="https://giphy.com/embed/qNpqSmKO4bn68"
        width="480"
        height="475"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Text>
        <h2>Oreo for the sweet tooth</h2>
        <Link className="back" to="/">
          Go back
        </Link>
      </Text>
    </div>
  );
};
export default Oreo;
