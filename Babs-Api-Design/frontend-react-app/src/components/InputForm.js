import React from "react";
import Repositories from "./Repositories";
import SingleRepository from "./SingleRepository";
import SavedRepositories from "./SavedRepositories";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "",
      searchParams: "",
      url: "",
      repositories: [],
      isLoading: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newUrl;
    this.state.endpoint === "http://localhost:5000/save-repos"
      ? (newUrl = `${this.state.endpoint}`)
      : (newUrl = `${this.state.endpoint}${this.state.searchParams}`);

    this.setState({ url: newUrl });
  }

  outputResults() {
    const { searchParams, endpoint } = this.state;
    if (!endpoint) {
      return <h5>Hint: Kindly select an endpoint to search </h5>;
    }
    if (!searchParams && endpoint !== "http://localhost:5000/save-repos") {
      return <h5>Hint: Enter search parameter </h5>;
    }

    if (endpoint === "http://localhost:5000/repository/") {
      return (
        <div>
          <Repositories query={searchParams} onChange={this.handleSubmit} />
        </div>
      );
    } else if (endpoint === "http://localhost:5000/repository_id/") {
      return (
        <div>
          <SingleRepository id={searchParams} onChange={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <div>
          <SavedRepositories onChange={this.handleSubmit} />
        </div>
      );
    }
  }

  render() {
    const { searchParams, endpoint } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h4> Select an endpoint</h4>
            <select
              name="endpoint"
              className="form-select"
              value={this.state.value}
              onChange={this.handleInputChange}
            >
              <option value="" />
              <option value="http://localhost:5000/repository/">
                Repositories
              </option>
              <option value="http://localhost:5000/repository_id/">
                Repository Id
              </option>
              <option value="http://localhost:5000/save-repos">
                Saved Repositories
              </option>
            </select>

            <h4> Enter endpoint search parameter</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your search parameter"
              name="searchParams"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <h4> {this.state.endpoint}</h4>
          <div>{this.outputResults(searchParams, endpoint)}</div>
        </div>
      </div>
    );
  }
}
