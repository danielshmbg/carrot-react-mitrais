import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootswatch/dist/pulse/bootstrap.min.css';
import './components/themes/Custom.css';
import App from './App';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import List from './components/List';
import ManagerRewardList from './components/manager/List';
import ManagerRewardCreate from './components/manager/Create';
import ManagerRewardEdit from './components/manager/Edit';
import ManagerRewardShow from './components/manager/Show';
import Barn from './components/Barn/Barn';
import BarnCreate from './components/Barn/Create';
import BarnEdit from './components/Barn/Edit';
import BarnShow from './components/Barn/Show';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={App} />
        <Route path='/list' component={List} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/managerreward/list' component={ManagerRewardList} />
        <Route path='/managerreward/edit/:id' component={ManagerRewardEdit} />
        <Route path='/managerreward/create' component={ManagerRewardCreate} />
        <Route path='/managerreward/show/:id' component={ManagerRewardShow} />
        <Route path='/barn/list' component={Barn} />
        <Route path='/barn/edit/:id' component={BarnEdit} />
        <Route path='/barn/create' component={BarnCreate} />
        <Route path='/barn/show/:id' component={BarnShow} />
        </div>
    </Router>,
  document.getElementById('root')
);

