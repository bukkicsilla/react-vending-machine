import { Link } from "react-router-dom";
const Oreo = () => {
  return (
    <div>
      <h2>Oreo for the sweet tooth</h2>
      <iframe
        src="https://giphy.com/embed/qNpqSmKO4bn68"
        width="480"
        height="475"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <div className="back">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
export default Oreo;
