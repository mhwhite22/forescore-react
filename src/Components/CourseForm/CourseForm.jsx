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