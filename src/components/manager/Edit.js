import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reward: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mitraiscarrot/reward/managerreward/'+this.props.match.params.id)
      .then(res => {
        this.setState({ reward: res.data });
        console.log(this.state.reward);
      });
  }

  onChange = (e) => {
    const state = this.state.reward
    state[e.target.name] = e.target.value;
    this.setState({reward:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
      createdBy, lastModifiedBy,deleted } = this.state.reward;

    axios.put('http://localhost:8080/mitraiscarrot/reward/managerreward/'+this.props.match.params.id, { typeName, carrot, status, rewardTypeName, maxClaim, expiredDate,
    createdBy, lastModifiedBy,deleted })
      .then((result) => {
        this.props.history.push("/managerreward/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div>
        <NavCarrot />

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Edit Reward - {this.state.reward.id}
              </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="typeName">Type Name:</label>
                  <input type="text" className="form-control" name="typeName" value={this.state.reward.typeName} onChange={this.onChange} placeholder="Type Name" />
                </div>
                <div className="form-group">
                  <label for="carrot">Carrot Count:</label>
                  <input type="text" className="form-control" name="carrot" value={this.state.reward.carrot} onChange={this.onChange} placeholder="Carrot Count" />
                </div>
                <div className="form-group">
                  <label for="status">Status:</label>
                  <select className="custom-select custom-select-sm" name="status" value={this.state.reward.status} onChange={this.onChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="hidden" name="rewardTypeName" value={this.state.reward.rewardTypeName} />
                  <input type="hidden" name="maxClaim" value={this.state.reward.maxClaim} />
                  <input type="hidden" name="expiredDate" value={this.state.reward.expiredDate} />
                  <input type="hidden" name="createdBy" value={this.state.reward.createdBy} />
                  <input type="hidden" name="lastModifiedBy" value={this.state.reward.lastModifiedBy} />
                  <input type="hidden" name="deleted" value={this.state.reward.deleted} />
                </div>
                <button type="submit" className="btn btn-default">Update</button>&nbsp;
                <Link to={`/managerreward/list`} className="btn btn-info">Back to Reward List</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Edit;