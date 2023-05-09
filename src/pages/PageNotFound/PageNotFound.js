import img from "./error.gif";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound-wrapper">
      <img
        style={{
          display: "block",
          width: "350px",
          height: "350px",
          objectFit: "contain",
          margin: "0px auto",
        }}
        src={img}
        alt="Error"
      />
      <p>Страница не найдена</p>
      <Link to={"/"}>На главную</Link>
    </div>
  );
};

export default PageNotFound;
