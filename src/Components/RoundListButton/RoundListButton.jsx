import React from "react";
import { Link } from "react-router-dom";

function RoundListButton({ round }) {
  if (round.scorecard) {
    return (
      <div className="card-content">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/details",
            state: { round },
          }}
        >
          Details
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card-content">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/addscorecard",
            state: { round },
          }}
        >
          Add Scorecard
        </Link>
      </div>
    );
  }
}

export default RoundListButton;
