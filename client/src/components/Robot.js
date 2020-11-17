import React, { Component } from 'react'
import {Button, ListGroup, ListGroupItem} from 'reactstrap'
import axios from 'axios'

import  '../App.css'
 class Robot extends Component {
    state ={
        currentTask: "...",
        tasksCompleted: 0,
        deleteTask: "",
        completedTask: [],
        failedTask: [],
        toggleButton: false
    }
    async beginTasks() {
       
        this.setState({toggleButton: !this.state.toggleButton})
        //Loop through tasks for robot to do
        for(var i = 0; i < this.props.assignedTasks.length; i++){
            
            //If assignedTask is less than 5
            if(this.props.assignedTasks.[i] === undefined){
                break;
            }

            this.setState({currentTask: this.props.assignedTasks.[i].description})
    
            
            if(this.props.robot.type === this.props.assignedTasks.[i].type){
                //Wait for promise
                await this.delayCompletedTask(i)
                this.setState({completedTask: [...this.state.completedTask, this.props.assignedTasks.[i].description]})
            }
            else{
                await this.delayFailedTask(i)
            }
            
            console.log("Hello")
        }
        this.setState({currentTask: "Finished tasks!"})
        setTimeout(() => {
            axios.put('api/robots', {
                name: this.props.robot.name,
                score: this.state.tasksCompleted
            })
                .then(res => console.log(res))

            
        }, 1000)
        

        
    }

    delayCompletedTask = (i) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setState({tasksCompleted: this.state.tasksCompleted + 1})
                this.setState({deleteTask: this.props.assignedTasks.[i]._id}, () =>{
                    this.props.deleteTask(this.state.deleteTask)
                })
                resolve('success')
            }, this.props.assignedTasks.[i].eta)
            
        })
        

    }

    delayFailedTask = (i) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setState({failedTask: [...this.state.failedTask, this.props.assignedTasks.[i].description]})
                resolve('success')
            }, 500)
            
        })
        

    }
    
    render() {
        return (
            <div>
                <div className="robot-style">
                <div>
                <h4>{this.props.robot.name}</h4>
                <p>Currrent Task: {this.state.currentTask}</p>
                </div>
                
                
                <p>Tasks Completed: {this.state.tasksCompleted}</p>
                <Button disabled={this.state.toggleButton} onClick={this.beginTasks.bind(this)}>Turn On</Button>
            </div>
            <div className="robot-task-group">
                <h2>Attempted Tasks: </h2>
                <ListGroup>
                    {this.state.completedTask.map((task) => (
                        <ListGroupItem color="success">{task}</ListGroupItem>
                    ))}
                </ListGroup>
                <ListGroup>
                    {this.state.failedTask.map((task) => (
                        <ListGroupItem color="danger">{task}</ListGroupItem>
                    ))}
                </ListGroup>
            </div>
            </div>
        )
    }
}

export default Robot;


const robotStyle = {
    marginTop: '1rem',
    border: '2px solid black',
    margin: 'auto',
    width: '50%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}