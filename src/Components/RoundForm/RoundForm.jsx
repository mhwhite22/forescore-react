import React, { Component } from "react";


class RoundForm extends Component {
    state = {
        selectOptions: [],
        formData: { 
            course: "",
            score: "",
            dateOfPlay: ""
        }
    }

    getOptions(){
      const options = this.props.courses.map(c => ({
        "value": c._id,
        "label": c.name
      }));
      this.setState({selectOptions: options})
    }

    componentDidMount(){
      this.getOptions()
    }


    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await this.props.handleAddRound(this.state.formData);
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
    
    render(){
        return(
            <div className="RoundForm-container card">
                <div className="RoundForm">
                <header className="header-footer">Add A New Round</header>
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
                            placeholder="Date of Play"
                            value={this.state.formData.dateOfPlay}
                            name="dateOfPlay"
                            onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                          <div className="select-container">
                          <select
                           className="form-control"
                           placeholder="Course"
                           value={this.state.formData.course}
                           name="course"
                           onChange={this.handleChange}
                           >
                          <option default>Select Course</option>
                           {this.state.selectOptions.map((option) => (
                             <option value={option.value}>{option.label}</option>
                           ))}
                           </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Score"
                            value={this.state.formData.score}
                            name="score"
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
            </div>
        )
    }
}

export default RoundForm;