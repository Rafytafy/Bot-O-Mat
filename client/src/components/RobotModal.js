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

class RobotModal extends Component {
    
    state = {
        modal: false,
        name: '',
        type: ''
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


        const newRobot = {
            name: this.state.name,
            type: this.state.type
        };

        //Add item via addItem action 
        
         this.props.addRobot(newRobot)

         //Close modal
         this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    onClick={this.toggle}
                    className="custom-button"
                >Create Robot</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Create Robot</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="robotName">Name</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="robotName"
                                    placeholder="Enter name of Robot"
                                    onChange={this.onChange}
                                />
                                
                                <Label for="robotType">Type</Label>
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
                                block>Create Robot</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default RobotModal;