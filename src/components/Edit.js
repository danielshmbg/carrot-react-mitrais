import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mitraiscarrot/transactions/'+this.props.match.params.id)
      .then(res => {
        this.setState({ transaction: res.data });
        console.log(this.state.transaction);
      });
  }

  onChange = (e) => {
    const state = this.state.transaction
    state[e.target.name] = e.target.value;
    this.setState({transaction:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { userId, type, idSource, toOrFrom, description, carrotCount,
        status, isDeleted,transactionTime } = this.state.transaction;

    axios.put('http://localhost:8080/mitraiscarrot/transactions/'+this.props.match.params.id, { userId, type, idSource, toOrFrom, description, carrotCount,
        status, isDeleted,transactionTime })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Reward
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.transaction.id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Reward List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="userId">User Id:</label>
                <input type="text" className="form-control" name="userId" value={this.state.transaction.userId} onChange={this.onChange} placeholder="User Id" />
              </div>
              <div className="form-group">
                <label for="type">Type:</label>
                <input type="text" className="form-control" name="type" value={this.state.transaction.type} onChange={this.onChange} placeholder="Type" />
              </div>
              <div className="form-group">
                <label for="idSource">id Source:</label>
                <input type="text" className="form-control" name="idSource" value={this.state.transaction.idSource} onChange={this.onChange} placeholder="idSource" />
              </div>
              <div className="form-group">
                <label for="toOrFrom">To / From:</label>
                <input type="text" className="form-control" name="toOrFrom" value={this.state.transaction.toOrFrom} onChange={this.onChange} placeholder="To / From" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.transaction.description} onChange={this.onChange} placeholder="description" />
              </div>
              <div className="form-group">
                <label for="carrotCount">Carrot Count:</label>
                <input type="text" className="form-control" name="carrotCount" value={this.state.transaction.carrotCount} onChange={this.onChange} placeholder="Carrot Count" />
              </div>
              <div className="form-group">
                <label for="status">Status:</label>
                <input type="text" className="form-control" name="status" value={this.state.transaction.status} onChange={this.onChange} placeholder="Status" />
              </div>
              <div className="form-group">
                <label for="isDeleted">Is Deleted:</label>
                <input type="text" className="form-control" name="isDeleted" value={this.state.transaction.isDeleted} onChange={this.onChange} placeholder="is Deleted" />
              </div>
              <div className="form-group">
                <label for="transactionTime">Transaction Time:</label>
                <input type="text" className="form-control" name="transactionTime" value={this.state.transaction.transactionTime} onChange={this.onChange} placeholder="Transaction Time" />
              </div>
              <button type="submit" className="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;