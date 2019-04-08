import React, { Component, Fragment } from "react";
import axios from "axios";

export default class SavedRepositories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      savedRepositories: []
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(`http://localhost:5000/save-repos`);
    this.setState({
      loading: false,
      savedRepositories: data
    });
  }

  render() {
    if (this.state.savedRepositories.length === 0)
      return <div>No saved repositories </div>;

    const repoData = this.state.savedRepositories.bookmarkedRepositories.map(
      (item, i) => {
        return (
          <Fragment key={item.id}>
            <p> </p>
            <h4> Item {i + 1}.</h4>
            <li>id: {item.id}</li>
            <li>node_id: {item.node_id}</li>
            <li>name: {item.name}</li>
            <li>private: {item.private}</li>
            <li>description: {item.description}</li>
            <li>url: {item.url}</li>
          </Fragment>
        );
      }
    );
    return (
      <>
        <>
          <h3>
            Total saved Repositories:
            {this.state.savedRepositories.numberOfItems}
          </h3>
        </>

        <>{repoData}</>
      </>
    );
  }
}
