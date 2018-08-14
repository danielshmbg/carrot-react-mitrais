import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';


class Barn extends Component {

    constructor(props) {
        super(props);
        this.state = {
          barn: []
        };
      }

      /**
       * Mount all data to FrontEnd
       */
      componentDidMount(){
        axios.get('http://localhost:8080/mitraiscarrot/barn')
          .then(res => {
            this.setState({ barn : res.data});
            console.log(this.state.barn);
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
                  Barn List
                </h3>
              </div>
              <div className="panel-body">
                <h4><Link to="./create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Barn</Link></h4>
                <table className="table table-stripe">
                  <thead>
                    <tr>
                    <th>Id</th>
                      <th>Barn Name</th>
                      <th>Start Period</th>
                      <th>End Period</th>
                      <th>Owner</th>
                      <th>Carrot per Employee</th>
                      <th>Total Carrot</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.barn.map(t =>
                      <tr>
                        <td><Link to={`/barn/show/${t.id}`}>{t.id}</Link></td>
                        <td>{t.name}</td>
                        <td>{t.startPeriod}</td>
                        <td>{t.endPeriod}</td>
                        <td>{t.owner}</td>
                        <td>{t.carrotPerEmployee}</td>
                        <td>{t.totalCarrot}</td>
                        <td>{t.status}</td>
                        <td><Link to={`/barn/show/${t.id}`} className="btn btn-warning">Detail</Link></td>
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


export default Barn;