import React from "react";

export default class EndpointInput extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="form-group">
        <select id="endpoint">
          <option value="Repositories">Repositories</option>
          <option value="RepositoryId">Repository Id</option>
          <option value="SavedRepositories">Saved Repositories</option>
        </select>
      </div>
    );
  }
}
