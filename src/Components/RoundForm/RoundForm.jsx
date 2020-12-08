import React, { Component } from "react";
import styles from './RoundForm.css';
import { Link } from 'react-router-dom';
//import DatePicker from 'react-datepicker';

// import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


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
    
    handleDateChange(date) {
      this.setState({
        formData: {
          dateOfPlay: date
        }
      });
    }
    
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
                <header className="header">Add A New Round</header>
                <div className="RoundForm">
                <form
                    ref={this.formRef}
                    className="form-horizontal"
                    onSubmit={this.handleSubmit}
                    >
                    <div className="form-group">
                         <div className="col-sm-12">
                         {/* <DatePicker
              selected={ this.state.formData.dateOfPlay }
              onChange={ this.handleDateChange }
              name="dateOfPlay"
              dateFormat="MM/dd/yyyy"
          /> */}
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
                           className="courseSelect browser-default form-control"
                          //  className="form-control"
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
                    <div className="buttons-container">
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                          <button className="btn btn-default">Submit</button>
                        </div>
                      </div>
                        <div className="form-group">
                        <div className="col-sm-12 text-center">
                        <Link to='/home' className='btn btn-default'>Back</Link>
                        </div>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RoundForm;