import React, { Component } from 'react'
import {Button} from 'reactstrap'
import axios from 'axios'

import  '../App.css'
 class Robot extends Component {
    state ={
        currentTask: "...",
        tasksCompleted: 0,
        deleteTask: ""
    }
    async beginTasks() {

        for(var i = 0; i < this.props.assignedTasks.length; i++){
            if(this.props.assignedTasks.[i] === undefined){
                break;
            }
            this.setState({currentTask: this.props.assignedTasks.[i].description})
    
            if(this.props.robot.type === this.props.assignedTasks.[i].type){
                await this.delay(i)
            }
            
            
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

    delay = (i) => {
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
    
    render() {
        return (
            
            <div className="robot-style">
                <div>
                <h4>{this.props.robot.name}</h4>
                <p>Currrent Task: {this.state.currentTask}</p>
                </div>
                
                
                <p>Tasks Completed: {this.state.tasksCompleted}</p>
                <Button onClick={this.beginTasks.bind(this)}>Turn On</Button>
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