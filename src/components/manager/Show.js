import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';

class Show extends Component {

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

  delete(id){
    console.log(id);
    if (window.confirm('Are you sure you wish to delete this item?')){
      axios.delete('http://localhost:8080/mitraiscarrot/reward/managerreward/'+id)
      .then((result) => {
        this.props.history.push("/managerreward/list")
      });
    }
    
  }

  render() {
    return (
      <div>
        <NavCarrot />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Reward details - {this.state.reward.id}
              </h3>
            </div>
            <div className="panel-body">
              <dl>
                <dt>Type Name:</dt>
                <dd>{this.state.reward.typeName}</dd>
                <dt>Carrot Count:</dt>
                <dd>{this.state.reward.carrot}</dd>
                <dt>Status:</dt>
                <dd>{this.state.reward.status}</dd>
              </dl>
              <Link to={`/managerreward/edit/${this.state.reward.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.reward.id)} className="btn btn-danger">Delete</button>&nbsp;
            <Link to={`/managerreward/list`} className="btn btn-info">Back to Reward List</Link>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Show;