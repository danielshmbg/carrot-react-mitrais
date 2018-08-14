import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';


class BarnHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      barnSetting: []
    };
  }
    
    componentDidMount() {
      
      axios.get('http://localhost:8080/mitraiscarrot/barnSetting/history/'+this.props.match.params.id)
        .then(res => {
          this.setState({ barnSetting: res.data });
          console.log(this.state.barnSetting);
        }); 
    }
  
    delete(id,barnid){
      console.log(id);
      axios.delete('http://localhost:8080/mitraiscarrot/barnSetting/'+id)
        .then((result) => {
          this.props.history.go(0);
        });
    }
  
    render() {

      var barnlist = 
      this.state.barnSetting.length? 
      this.state.barnSetting.map(t =>
        <tr>
          <td>{t.id}</td>
          <td>{t.description}</td>
          <td>{t.idReward}</td>
          <td>{t.carrot}</td>
          <td>{t.date}</td>
          <td><button onClick={this.delete.bind(this, t.id,t.barn.id)} className="btn btn-warning">Cancel</button></td>
        </tr>
      ) : <tr >Sorry, no reward</tr> ;
      return (
        <div>
            <NavCarrot />

          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Manage Barn 
                </h3>
              </div>
              <div className="panel-body">
                <h4><Link to={`/managebarn/reward/${this.state.id}`}><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Reward Carrot</Link></h4>
                <table className="table table-stripe">
                  <thead>
                    <tr>
                    <th>Id</th>
                      <th>Description</th>
                      <th>Manager</th>
                      <th>Carrot</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{barnlist}

                    
                  </tbody>
                </table>
                <div><pre>{JSON.stringify(this.setState.barnSetting, null, 2) }</pre></div>
              </div>
            </div>
          </div>
          
          </div>
          
      );
    }
  }
  
  export default BarnHistory;