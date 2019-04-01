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
    const { params } = this.props;
    const { data } = await axios.get(
      `http://localhost:5000/repository/${params.query}`
    );

    this.setState({
      repositories: data,
      loading: false
    });
  }

  render() {
    if (this.state.loading) return <div>Loading ...</div>;
    if (!this.state.repositories) return <div>No repository is available</div>;

    const repoData = this.state.repositories.items.map((item, i) => {
      return (
        <Fragment key={item.id}>
          <p> </p>
          <h4> Item {i + 1}.</h4>
          <p>id: {item.id}</p>
          <p>node_id: {item.node_id}</p>
          <p>name: {item.name}</p>
          <p>private: {item.private}</p>
          <p>description: {item.description}</p>
          <p>url: {item.url}</p>
        </Fragment>
      );
    });
    return (
      <>
        <>
          <h3>total_count: {this.state.repositories.total_count}</h3>
        </>
        <>
          <h3>
            incomplete_results: {this.state.repositories.incomplete_results}
            {this.state.visible}
          </h3>
        </>
        <>{repoData}</>
      </>
    );
  }
}
