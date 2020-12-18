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
            <div className="ScorecardForm">
                

            </div>
        )
    }
}

export default ScorecardForm