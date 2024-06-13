import { Link } from "react-router-dom";
const OrangeJuice = () => {
  return (
    <div>
      <h2>Orange Juice with pulp</h2>
      <iframe
        src="https://giphy.com/embed/KJ8nQLWsPJYv37oQgo"
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
export default OrangeJuice;
