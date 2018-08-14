import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      startPeriod:moment(),
      endPeriod: moment().add(1, 'years'),
      owner:"",
      carrotPerEmployee:0,
      totalCarrot:0,
      status:"active",
      createdBy:"admin"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }


  onSubmit = (e) => {
    e.preventDefault();

    const { name,startPeriod,endPeriod,owner,carrotPerEmployee,totalCarrot,status,createdBy} = this.state;

    axios.post('http://localhost:8080/mitraiscarrot/barn/', {  name,startPeriod,endPeriod,owner,carrotPerEmployee,totalCarrot,status,createdBy })
      .then((result) => {
        this.props.history.push("/barn/list")
      });
  }

  handleStartChange(date) {
    this.setState({
      startPeriod: date
    });
  }

  handleChange(date) {
    this.setState({
      endPeriod: date
    });
  }

  render() {
    const { name,startPeriod,endPeriod,owner,carrotPerEmployee,totalCarrot,status,createdBy } = this.state;
    return (
      <div>
        <NavCarrot />
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Create New Barn
            </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="barnName">Barn Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Barn Name" />
                  </div>
                  <div className="form-group">
                    <label for="startPeriod">Start Period:</label>
                    <DatePicker type="text" className="form-control" name="startPeriod" value={startPeriod} selected={this.state.startPeriod} onChange={this.handleStartChange} placeholder="Start Period" />
                  </div>
                  <div className="form-group">
                    <label for="endPeriod">End Period:</label>
                    <DatePicker type="text" className="form-control" name="endPeriod" value={endPeriod} selected={this.state.endPeriod} onChange={this.handleChange} placeholder="End Period" />
                  </div>
                  <div className="form-group">
                    <label for="owner">Owner:</label>
                    <input type="text" className="form-control" name="owner" value={owner} onChange={this.onChange}  placeholder="Owner" />
                  </div>
                  <div className="form-group">
                    <label for="carrotPerEmployee">Carrot per Employee:</label>
                    <input type="text" className="form-control" name="carrotPerEmployee" value={carrotPerEmployee} onChange={this.onChange} placeholder="Carrot per Employee" />
                  </div>
                  <div className="form-group">
                    <label for="totalCarrot">Total Carrot:</label>
                    <input type="text" className="form-control" name="totalCarrot" value={totalCarrot} onChange={this.onChange} placeholder="Total Carrot" />
                  </div>
                  <div className="form-group">
                    <label for="status">Status:</label>
                    <select className="custom-select custom-select-sm" name="status" onChange={this.onChange}>
                      <option value="Active" selected>Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>&nbsp;
                  <Link to={`/barn/list`} className="btn btn-info">Back to Barn List</Link>
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