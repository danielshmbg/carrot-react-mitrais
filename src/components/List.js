import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavCarrot from './NavCarrot';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      transactions : []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/mitraiscarrot/transactions')
      .then(res => {
        this.setState({ transactions : res.data});
        console.log(this.state.transactions);
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
              Reward List
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Reward</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Created By</th>
                  <th>Type</th>
                  <th>Id Source</th>
                  <th>To / From</th>
                  <th>Description</th>
                  <th>Carrot Count</th>
                  <th>Status</th>
                  <th>is Deleted</th>
                  <th>Transaction Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.transactions.map(t =>
                  <tr>
                    <td><Link to={`/show/${t.id}`}>{t.id}</Link></td>
                    <td>{t.user.userName}</td>
                    <td>{t.type}</td>
                    <td>{t.idSource}</td>
                    <td>{t.toOrFrom}</td>
                    <td>{t.description}</td>
                    <td>{t.carrotCount}</td>
                    <td>{t.status}</td>
                    <td>{t.isDeleted ? "True" : "False"}</td>
                    <td>{t.transactionTime}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default List;
