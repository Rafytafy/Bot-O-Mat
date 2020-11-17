import React, { Component, Checkbox } from 'react'
import { Table, Container } from 'reactstrap'
import RobotModal from './RobotModal'
import TaskModal from './TaskModal'

class Setup extends Component {

    render() {
        
        return (
            <Container>
                <div>
                    <RobotModal addRobot={this.props.addRobot}/>
                    <Table>
                        <thead>
                            <th>Robot Name</th>
                            <th>Type</th>
                            <th>Score</th>
                        </thead>
                        {this.props.robots.map((robot) => (
                            <tr key={robot._id}>
                                <th><input type="radio" name="name" onChange={this.props.selectRobots} value={robot._id} />{robot.name}</th>
                                <th>{robot.type}</th>
                                <th>{robot.score}</th>
                            </tr>
                        ))}
                    </Table>
                            <br />
                            <br />
                            <br />
                    <TaskModal addTask={this.props.addTask}/>
                    <Table>
                        <thead>
                            <th>Description</th>
                            <th>eta</th>
                            <th>Complete By</th>
                        </thead>
                        {this.props.tasks.map((task) => (
                            <tr key={task._id}>
                                <th>{task.description}</th>
                                <th>{task.eta}</th>
                                <th>{task.type}</th>
                            </tr>
                        ))}
                    </Table>
                </div>
            </Container>
            
        )
    }
}

export default Setup;