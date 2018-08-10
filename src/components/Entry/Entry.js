import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const Entry = () => {
  const hello = true;

  if (hello === true) {
    return (
      <div>
        <h1> Entry Page </h1>

        <Link to={routes.LANDING}>
          <button type="button">ENTER</button>
        </Link>
      </div>
    );
  }
  return null;
};

export default Entry;
