import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstap';
import { Container } from 'reactstrap';

export class FormModal extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <h1>Add here</h1>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        );
    }
}

export default FormModal;