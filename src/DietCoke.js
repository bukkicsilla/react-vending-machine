import { Link } from "react-router-dom";
const DietCoke = () => {
  return (
    <div>
      <h2>Diet Coke is refreshing</h2>
      <iframe
        src="https://giphy.com/embed/DDbmZoOOn0KWFdRmvL"
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
export default DietCoke;
