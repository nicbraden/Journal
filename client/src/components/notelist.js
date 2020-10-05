import React, { Component } from 'react';
import { Container, ListGroup, Button, CardSubtitle, CardBody, CardTitle, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions/noteActions';
import PropTypes from 'prop-types';


class NotesList extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    //id comes from the click
    onDeleteClick = (id) => {
        //calls the action with the id to the action to the reducer with the payload 
        this.props.deleteNote(id);
    };

    render() {    
        const { notes } = this.props.note;

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="noteList">
                        { notes.map(({ id, title, mood, note }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <CardTitle>{title }</CardTitle>
                                    <CardSubtitle>
                                    { mood }
                                    </CardSubtitle>
                                    <CardBody>
                                    { note }
                                    </CardBody>
                                    <Button className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={ this.onDeleteClick.bind(this, id)}>
                                    &times;
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

NotesList.propTypes = {
    getNotes: PropTypes.func.isRequired,
    //represents state
    note: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    note: state.note
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesList);