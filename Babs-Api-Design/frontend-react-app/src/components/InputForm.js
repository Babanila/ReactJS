import React from "react";
import EndpointInput from "./EndpointInput";
import TextInput from "./TextInput";

export default class InputForm extends React.Component {
  constructor() {
    super();

    this.state = {
      formControls: {
        endpoint: {
          value: "Repositories"
        },
        inputValue: {
          value: "",
          placeholder: "Enter your search parameter"
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      formControls: {
        endpoint: event.target.value,
        inputValue: event.target.value
      },
      url: ""
    });
  };

  handleSubmit(event) {
    console.log("processing...  ");
    // url: ({this.state.formControls.endpoint.value} + "/" + {this.state.formControls.inputValue.value})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Select an endpoint</h4>
        <EndpointInput
          name="endpoint"
          value={this.state.formControls.endpoint.value}
          onChange={this.handleChange}
        />
        <h4> Enter endpoint search parameter</h4>
        <TextInput
          type="text"
          name="inputValue"
          placeholder={this.state.formControls.inputValue.placeholder}
          value={this.state.formControls.inputValue.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*
<form onSubmit={this.handleSubmit}>
        <h4> Select an endpoint</h4>
        <select id="endpoint" name="endpoint">
          <option value="Repositories">Repositories</option>
          <option value="RepositoryId">Repository Id</option>
          <option value="SavedRepositories">Saved Repositories</option>
        </select>
        <br />
        <br />
        <h4> Enter endpoint search parameter</h4>
        <input
          type="text"
          className="form-control"
          name="inputValue"
          placeholder={this.state.formControls.inputValue.placeholder}
          value={this.state.formControls.inputValue.value}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

*/
