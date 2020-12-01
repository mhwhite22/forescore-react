import React, { Component } from "react";
import styles from "./CourseForm.css";

class CourseForm extends Component {
    state = {
        formData: {
            name: "",
            location: "",
            par: "",
            yardage: "",
            slope: "",
            numHoles: "",
        }
    };

    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await this.props.handleAddDay(this.state.formData);
        } catch (err) {
          console.log(err);
        }
      };
    
      handleChange = (e) => {
        const formData = {
          ...this.state.formData,
          [e.target.name]: e.target.value,
        };
        this.setState({
          formData,
        });
      };

      render() {
          return (
              <div className="CourseForm">
                  <h2>courseform</h2>
              </div>
          )
      }
}

export default CourseForm;