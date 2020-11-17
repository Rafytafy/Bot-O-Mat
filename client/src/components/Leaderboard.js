import React, { Component } from 'react'
import { Table, Container } from 'reactstrap'

import axios from 'axios'

class Leaderboard extends Component {
    state ={
        leaderboard: []
    }
    componentDidMount() {
        axios.get('api/leaderboard')
        .then((res) => {
          this.setState({leaderboard: res.data})
        })
    }
    
    
    render() {
        return (
            <div>
            <Container>
                <h2>Leaderboard</h2>
                <Table>
                    <thead>
                        <th>Robot Name</th>
                        <th>Type</th>
                        <th>Score</th>
                    </thead>
                    {this.state.leaderboard.map((robot) => (
                        <tr key={robot._id}>
                            <th>{robot.name}</th>
                            <th>{robot.type}</th>
                            <th>{robot.score}</th>
                        </tr>
                ))}
                </Table>
            </Container>
            </div>
        )
    }
}

export default Leaderboard;
