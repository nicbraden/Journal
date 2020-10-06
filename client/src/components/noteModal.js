import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';

class NoteModal extends Component {
    state = {
        modal: false,
        title: '',
        mood: '',
        note: '',
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newNote = {
            title: this.state.title,
            mood: this.state.mood,
            note: this.state.note
        }
        //Add note with addnote action
        this.props.addNote(newNote);
        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>
                    New Note
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Create New Note</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="note">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    onChange={this.onChange}
                                />
                                <Label for="testmood">Mood</Label>
                                <Input type="select" name="mood" id="mood" value={this.state.value} onChange={this.onChange}>
                                    <option value="Happy">Happy</option>
                                    <option value="Sad">Sad</option>
                                    <option value="Disgusted">Disgusted</option>
                                    <option value="Surprised">Surprised</option>
                                    <option value="Angry">Angry</option>
                                    <option value="Bad">Bad</option>
                                    <option value="Fearful">Fearful</option>
                                </Input>
                                <Label for="note">Note</Label>
                                <Input
                                    type="textarea"
                                    name="note"
                                    id="note"
                                    placeholder="Entry"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block>
                                    Submit Note
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    note: state.note
});

export default connect(mapStateToProps, { addNote })(NoteModal);
