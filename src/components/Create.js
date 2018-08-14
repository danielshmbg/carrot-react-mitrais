import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      userId: null,
      type: '',
      idSource: 0,
      toOrFrom: '',
      description: '',
      carrotCount: 0,
      status: 'active',
      isDeleted: 0,
      transactionTime: '2018-08-10 22:50:16'
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { userId, type, idSource, toOrFrom, description, carrotCount,
    status, isDeleted,transactionTime } = this.state;

    axios.post('http://localhost:8080/mitraiscarrot/transactions', { userId, type, idSource, toOrFrom, description, carrotCount,
        status, isDeleted,transactionTime })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { userId, type, idSource, toOrFrom, description, carrotCount,
        status, isDeleted,transactionTime } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Give Reward
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="userId">User Id:</label>
                <input type="text" className="form-control" name="userId" value={userId} onChange={this.onChange} placeholder="User Id" />
              </div>
              <div className="form-group">
                <label for="type">Type:</label>
                <input type="text" className="form-control" name="type" value={type} onChange={this.onChange} placeholder="Type" />
              </div>
              <div className="form-group">
                <label for="idSource">id Source:</label>
                <input type="text" className="form-control" name="idSource" value={idSource} onChange={this.onChange} placeholder="idSource" />
              </div>
              <div className="form-group">
                <label for="toOrFrom">To / From:</label>
                <input type="text" className="form-control" name="toOrFrom" value={toOrFrom} onChange={this.onChange} placeholder="To / From" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} placeholder="description" />
              </div>
              <div className="form-group">
                <label for="carrotCount">Carrot Count:</label>
                <input type="text" className="form-control" name="carrotCount" value={carrotCount} onChange={this.onChange} placeholder="Carrot Count" />
              </div>
              <div className="form-group">
                <label for="status">Status:</label>
                <input type="text" className="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
              </div>
              <div className="form-group">
                <label for="isDeleted">Is Deleted:</label>
                <input type="text" className="form-control" name="isDeleted" value={isDeleted} onChange={this.onChange} placeholder="is Deleted" />
              </div>
              <div className="form-group">
                <label for="transactionTime">Transaction Time:</label>
                <input type="text" className="form-control" name="transactionTime" value={transactionTime} onChange={this.onChange} placeholder="Transaction Time" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;