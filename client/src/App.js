import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layouts/header'
import Setup from './components/Setup'
import Execute from './components/Execute'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  state = {
    robots: [],
    tasks: [],
    selectedRobotId: [],
    selectedRobots: [],
    leaderboard: []
  }
  
  componentDidMount() {
    axios.get('api/robots')
      .then((res) => {
        this.setState({robots: res.data})
      })

    axios.get('api/tasks')
      .then((res) => {
        this.setState({tasks: res.data})
      })

  }

  addRobot = item => {
    const newRobot = {
      name: item.name,
      type: item.type,
      score: 0
    }
    this.setState({robots: [...this.state.robots, newRobot]});
    
    axios.post('api/robots',newRobot)
      .then(res => console.log(res.data))
  }

  addTask = item => {
    console.log(item.eta);
    const newTask = {
      description: item.description,
      eta: item.eta,
      type: item.type
    }

    this.setState({tasks: [...this.state.tasks, newTask]});

    axios.post('api/tasks', newTask)
      .then(res => console.log(res.data))
  }

  selectRobots = e => {
    const target = e.target

    this.setState({selectedRobotId: [target.value]})
  
  
}

  deleteTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task._id !== id)]
    })

  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Setup robots={this.state.robots} tasks={this.state.tasks} addRobot={this.addRobot} addTask={this.addTask} selectRobots={this.selectRobots} />
            </React.Fragment>
          )}
          />
          <Route path="/execute" render= {props => (
              <React.Fragment>
                <Execute robots={this.state.robots} tasks={this.state.tasks} selectedRobotId={this.state.selectedRobotId} deleteTask={this.deleteTask} />
              </React.Fragment>
            )} 
          />
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          
        </div>
      </Router>
      
    )
  }
}

export default App;