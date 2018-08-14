import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Show extends Component {

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
  
    delete(id){
      console.log(id);
      axios.delete('http://localhost:8080/mitraiscarrot/barn/'+id)
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
                Barn details
              </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Barn List</Link></h4>
              <dl>
                <dt>Barn Name:</dt>
                <dd>{this.state.barn.name}</dd>
                <dt>Start Peropd :</dt>
                <dd>{this.state.barn.startPeriod}</dd>
                <dt>End Period:</dt>
                <dd>{this.state.barn.endPeriod}</dd>
                <dt>Owner:</dt>
                <dd>{this.state.barn.owner}</dd>
                <dt>Carrot per Employee:</dt>
                <dd>{this.state.barn.carrotPerEmployee}</dd>
                <dt>Total Carrot:</dt>
                <dd>{this.state.barn.totalCarrot}</dd>
                <dt>Status:</dt>
                <dd>{this.state.barn.status}</dd>
                <dt>Created By:</dt>
                <dd>{this.state.barn.createdBy}</dd>
              </dl>
              <Link to={`/barn/edit/${this.state.barn.id}`} className="btn btn-success">Edit</Link>&nbsp;
              <button onClick={this.delete.bind(this, this.state.barn.id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Show;