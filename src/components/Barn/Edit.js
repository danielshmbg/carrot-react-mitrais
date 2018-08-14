import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      barn: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mitraiscarrot/barn/'+this.props.match.params.id)
      .then(res => {
        this.setState({ barn: res.data });
        console.log(this.state.barn);
      });
  }

  onChange = (e) => {
    const state = this.state.barn
    state[e.target.name] = e.target.value;
    this.setState({barn:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name,startPeriod,endPeriod,owner,carrotPerEmployee,totalCarrot,status,createdBy } = this.state.barn;

    axios.put('http://localhost:8080/mitraiscarrot/barn/'+this.props.match.params.id, {name,startPeriod,endPeriod,owner,carrotPerEmployee,totalCarrot,status,createdBy })
      .then((result) => {
        this.props.history.push("/barn/show/"+this.props.match.params.id)
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
                Edit Barn - {this.state.barn.id}
              </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                    <label for="barnName">Barn Name:</label>
                    <input type="text" className="form-control" name="name" value={this.state.barn.name} onChange={this.onChange} placeholder="Barn Name" />
                  </div>
                <div className="form-group">
                  <label for="startPeriod">Start Period:</label>
                  <input type="text" className="form-control" name="startPeriod" value={this.state.barn.startPeriod} onChange={this.onChange} placeholder="Start Date" />
                </div>
                <div className="form-group">
                  <label for="endPeriod">End Period:</label>
                  <input type="text" className="form-control" name="endPeriod" value={this.state.barn.endPeriod} onChange={this.onChange} placeholder="Start Date" />
                </div>
                <div className="form-group">
                  <label for="owner">Owner:</label>
                  <input type="text" className="form-control" name="owner" value={this.state.barn.owner} onChange={this.onChange} placeholder="Start Date" />
                </div>
                <div className="form-group">
                  <label for="carrotPerEmployee">Carrot per Employee:</label>
                  <input type="text" className="form-control" name="carrotPerEmployee" value={this.state.barn.carrotPerEmployee} onChange={this.onChange} placeholder="Carrot per Employee" />
                </div>
                <div className="totalCarrot-group">
                  <label for="carrot">Total Carrot:</label>
                  <input type="text" className="form-control" name="totalCarrot" value={this.state.barn.totalCarrot} onChange={this.onChange} placeholder="Total Carrot" />
                </div>
                <div className="form-group">
                  <label for="status">Status:</label>
                  <select className="custom-select custom-select-sm" name="status" value={this.state.barn.status} onChange={this.onChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <input type="hidden" name="createdBy" value={this.state.barn.createdBy} />
                </div>
                <button type="submit" className="btn btn-default">Update</button>&nbsp;
                <Link to={`/barn/list`} className="btn btn-info">Back to Barn List</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Edit;