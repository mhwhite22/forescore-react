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
          await this.props.handleAddCourse(this.state.formData);
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
                  <header className="header-footer">Add A New Course</header>
                  <form
                    ref={this.formRef}
                    className="form-horizontal"
                    onSubmit={this.handleSubmit}
                    >
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Course Name"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Course Location"
                            name="location"
                            value={this.state.formData.location}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Par"
                            name="par"
                            value={this.state.formData.par}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Yardage"
                            name="yardage"
                            value={this.state.formData.yardage}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Slope"
                            name="slope"
                            value={this.state.formData.slope}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Holes"
                            name="numHoles"
                            value={this.state.formData.numHoles}
                            onChange={this.handleChange}
                            />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12 text-center">
                          <button className="btn btn-default">Submit</button>
                        </div>
                      </div>
                </form>
              </div>
          )
      }
}

export default CourseForm;