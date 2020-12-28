import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseDetailCard.css";

function CourseDetailCard({ course }) {
  return (
    <div className="CourseDetailCard">
      <div className="courseCard card blue-grey darken-2">
        <div className="card-title">{course.name}</div>
        <div className="card-content">
            <div ClassName="course stats">
          Location: {course.location}
          <br></br>
          Par: {course.par}
          <br></br>
          Yardage: {course.yardage}
          <br></br>
          Slope: {course.slope}
          <br></br>
          Holes: {course.numHoles}
          <br></br>
          <Link className="btn btn-xs btn-info" to="/courses">
            Back
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailCard;
