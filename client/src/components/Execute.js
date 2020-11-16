import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'
import Robot from './Robot'
import  '../App.css'

class Execute extends Component {
    state = {
        numberOfRobots: 0,
        selectedRobot: [],
        assignedTasks: []
    }


    begin = () =>{
        //Get the robots
        this.setState({selectedRobot: this.props.selectedRobotId.map(id => {
            for(let i = 0; i < this.props.robots.length; i++){
                if(id === this.props.robots[i]._id){
                    this.setState({numberOfRobots: this.state.numberOfRobots + 1})
                    return this.props.robots[i]
                }
                
            }
        })})

        //assign 5 tasks for each robot
        let tasks = []
            for(let i = 0; i < 5; i++){
                tasks[i] = this.props.tasks[i];
            }
            
        this.setState({assignedTasks: tasks})
    }

    render() {
        return (
            <Container>
                <div>
                    <Button className="custom-button" onClick={this.begin}>Deploy Robot</Button>
                    {this.state.selectedRobot.map((robot) => (
                        <Robot robot={robot} assignedTasks={this.state.assignedTasks} deleteTask={this.props.deleteTask} />
                    ))}
            
                    
                            
                </div>
            </Container>
        )
    }
}

export default Execute
