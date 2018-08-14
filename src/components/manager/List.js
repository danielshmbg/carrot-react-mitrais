import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavCarrot from '../NavCarrot';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rewards : []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/mitraiscarrot/reward/managerreward')
      .then(res => {
        this.setState({ rewards : res.data});
        console.log(this.state.rewards);
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
            <Link to={`/managerreward/create`} className="btn btn-info new-space"><span className="glyphicon glyphicon-plus-sign"></span>Add Reward</Link>
            <table className="table table-bordered table-hover new-space">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Type Name</th>
                  <th>Carrot Count</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rewards.map(t =>
                  <tr>
                    <td><Link to={`/managerreward/show/${t.id}`}>{t.id}</Link></td>
                    <td>{t.typeName}</td>
                    <td>{t.carrot}</td>
                    <td>{t.status}</td>
                    <td><Link to={`/managerreward/show/${t.id}`} className="btn btn-warning">Detail</Link></td>
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
