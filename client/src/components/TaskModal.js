import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'

class TaskModal extends Component {
    
    state = {
        modal: false,
        description: '',
        eta: 0,
        type: 'Unipedal'
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {

        const newTask = {
            description: this.state.description,
            eta: this.state.eta,
            type: this.state.type
        };
 
        
         this.props.addTask(newTask);

         //Close modal
         this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                    className="custom-button"
                >Create Task</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Create Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input 
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter Description of task"
                                    onChange={this.onChange}
                                />
                                
                                <Label for="eta">ETA (milliseconds)</Label>
                                <Input name="eta" type="number" id="eta"  onChange={this.onChange} />

                                <Label for="type">Complete By</Label>
                                <select name="type" id="robotType" className="modal-select" onChange={this.onChange}>
                                    <option>Unipedal</option>
                                    <option>Bipedal</option>
                                    <option>Quadrupedal</option>
                                    <option>Arachnid</option>
                                    <option>Radial</option>
                                    <option>Aeronautical</option>
                                </select>
                                
                                
                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block>Create Task</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default TaskModal;