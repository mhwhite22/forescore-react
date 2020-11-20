import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoundForm extends Component {
    state = {
        formData: { 
            course: "",
            score: "",
            dateOfPlay: "",
            user: "",
        }
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
            <div className="RoundForm">
                <header className="header">Add A New Round</header>
            </div>
        )
    }
}

export default RoundForm;