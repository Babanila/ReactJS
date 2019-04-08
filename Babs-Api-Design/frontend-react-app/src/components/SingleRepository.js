import React, { Component, Fragment } from "react";
import axios from "axios";

export default class SingleRepository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      repository: []
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    const { data } = await axios.get(
      `http://localhost:5000/repository_id/${id}`
    );

    this.setState({
      loading: false,
      repository: data
    });
  }

  render() {
    if (this.state.repository.length === 0)
      return <div>No repository found</div>;

    const repoData = this.state.repository;
    return (
      <Fragment key={repoData.id}>
        <p> </p>
        <h4> Repository </h4>
        <ul>
          <li>id: {repoData.id}</li>
          <li>node_id: {repoData.node_id}</li>
          <li>name: {repoData.name}</li>
          <li>private: {repoData.private}</li>
          <li>description: {repoData.description}</li>
          <li>url: {repoData.url}</li>
        </ul>
      </Fragment>
    );
  }
}
