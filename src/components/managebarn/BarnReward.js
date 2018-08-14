import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavCarrot from '../NavCarrot';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

class BarnReward extends Component {

  constructor(props) {
    super(props);
    const obarn = {id:this.props.match.params.id};
    console.log(this.idbarn);
    this.state = {
      barn: obarn,
      createdBy:"",
      createTime:"",
      description: "test",
      idReward:"",
      carrot: 0,
      date:"",
      isDeleted:0,
      isReleased:0,
      lastModifiedBy:"",
      lastModifiedTime:""
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  }

  // <th>Id</th>
  //                     <th>Description</th>
  //                     <th>Manager</th>
  //                     <th>Carrot</th>
  //                     <th>Date</th>
  //                     <th>Action</th>


  onSubmit = (e) => {
    e.preventDefault();

    const {barn:{id},createdBy, createTime, description, idReward, carrot, date,  
      isDeleted, isReleased,lastModifiedBy,lastModifiedTime} = this.state;

    axios.post('http://localhost:8080/mitraiscarrot/barnSetting/', 
    { barn:{id}, createdBy, createTime, description, idReward, carrot, date, isDeleted, isReleased,lastModifiedBy,lastModifiedTime})
      .then((result) => {
        
        this.props.history.push(`/managebarn/history/${this.state.barn.id}`)
      });
  }


  render() {
    const { barn:{id},createdBy, createTime, description, idReward, carrot, date,  
    isDeleted, isReleased,lastModifiedBy,lastModifiedTime } = this.state;
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
              {/* const {barn:{id},createdBy, createTime, description, idReward, carrot, date,  
      isDeleted, isReleased,lastModifiedBy,lastModifiedTime} = this.state; */}

              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="description">Description:</label>
                    <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
                  </div>
                  <div className="form-group">
                    <label for="carrot">Carrot:</label>
                    <input type="text" className="form-control" name="carrot" value={carrot} onChange={this.onChange}  placeholder="Carrot" />
                  </div>
                  <div className="form-group">
                    <label for="date">Date:</label>
                    <input type="text" className="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>&nbsp;
                  <Link to={`/managebarn/history/${this.state.barn.id}`} className="btn btn-info">Back to Barn History</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default BarnReward;