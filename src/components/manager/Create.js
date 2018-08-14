import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      typeName: "",
      carrot: 5,
      status: "Active",
      rewardTypeName: "Manager Reward",
      maxClaim: 0,
      expiredDate: null,
      createdBy: "Admin",
      lastModifiedBy: "Admin",
      deleted: false
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state;

    axios.post('http://localhost:8080/mitraiscarrot/reward/managerreward', { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
    createdBy, lastModifiedBy,deleted })
      .then((result) => {
        this.props.history.push("/managerreward/list")
      });
  }

  render() {
    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state;
    return (
      <div>
        <NavCarrot />
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Create New Reward
            </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="typeName">Type Name:</label>
                    <input type="text" className="form-control" name="typeName" value={typeName} onChange={this.onChange} placeholder="Type Name" />
                  </div>
                  <div className="form-group">
                    <label for="carrot">Carrot Count:</label>
                    <input type="text" className="form-control" name="carrot" value={carrot} onChange={this.onChange} placeholder="Carrot Count" />
                  </div>
                  <div className="form-group">
                    <label for="status">Status:</label>
                    <select className="custom-select custom-select-sm" name="status" onChange={this.onChange}>
                      <option value="Active" selected>Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>&nbsp;
                  <Link to={`/managerreward/list`} className="btn btn-info">Back to Reward List</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Create;