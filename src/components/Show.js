import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('http://localhost:8080/mitraiscarrot/transactions/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Reward details
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> transactions List</Link></h4>
            <dl>
              <dt>User Id:</dt>
              <dd>{this.state.transaction.userId}</dd>
              <dt>Type:</dt>
              <dd>{this.state.transaction.type}</dd>
              <dt>Id Source:</dt>
              <dd>{this.state.transaction.idSource}</dd>
              <dt>To / From:</dt>
              <dd>{this.state.transaction.toOrFrom}</dd>
              <dt>Description:</dt>
              <dd>{this.state.transaction.description}</dd>
              <dt>Carrot Count:</dt>
              <dd>{this.state.transaction.carrotCount}</dd>
              <dt>Status:</dt>
              <dd>{this.state.transaction.status}</dd>
              <dt>Is Deleted:</dt>
              <dd>{this.state.transaction.isDeleted}</dd>
              <dt>Transaction Time:</dt>
              <dd>{this.state.transaction.transactionTime}</dd>
              
            </dl>
            <Link to={`/edit/${this.state.transaction.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.transaction.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;