import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Repositories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      repositories: []
    };
  }

  async componentDidMount() {
    const { query } = this.props;
    const { data } = await axios.get(
      `http://localhost:5000/repository/${query}`
    );

    this.setState({
      repositories: data,
      loading: false
    });
  }

  render() {
    if (this.state.loading) return <h5> Loading ...</h5>;
    if (!this.state.repositories) return <h5>No repository is available</h5>;

    const repos = this.state.repositories.items.map((item, i) => {
      return (
        <Fragment key={item.id}>
          <p> </p>
          <h4> Item {i + 1}.</h4>
          <ul key={item.id}>
            <li>id: {item.id}</li>
            <li>node_id: {item.node_id}</li>
            <li>name: {item.name}</li>
            <li>private: {item.private}</li>
            <li>description: {item.description}</li>
            <li>url: {item.url}</li>
          </ul>
        </Fragment>
      );
    });
    return (
      <>
        <>
          <h3>Total: {this.state.repositories.total_count}</h3>
        </>
        <>
          <h3>
            Incomplete_results: {this.state.repositories.incomplete_results}
            {this.state.visible}
          </h3>
        </>
        <>{repos}</>
      </>
    );
  }
}
