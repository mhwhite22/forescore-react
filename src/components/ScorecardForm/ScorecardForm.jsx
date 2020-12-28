import React, { Component} from 'react';
import styles from './ScorecardForm.css';
import { Link } from 'react-router-dom';

class ScorecardForm extends Component {
    state = {
        formdata: {
            //form stuff goes here
        }
    }

    // componentDidMount(){
    //     this.getOptions()
    //   }
  
  
      formRef = React.createRef();
  
      handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await this.props.handleAddScorecard(this.state.formData);
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
          <div className="scorecardForm-container">
            <div className="scorecardForm">
                <header>Add A Scorecard</header>
                <form>
                  <input type="text" placeholder="I'm an input on a form"></input>
                </form>

            </div>
            </div>
        )
    }
}

export default ScorecardForm