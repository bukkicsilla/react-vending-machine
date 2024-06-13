import { Link } from "react-router-dom";
import Text from "./Text";
const OrangeJuice = () => {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/KJ8nQLWsPJYv37oQgo"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Text>
        <h2>Orange Juice with pulp</h2>
        <Link className="back" to="/">
          Go back
        </Link>
      </Text>
    </div>
  );
};
export default OrangeJuice;
