import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComp(props) {
    return (
        <Modal
            animation={false}
            {...props}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header
                style={{
                    justifyContent: 'center',
                }}
            >
                <Modal.Title id='contained-modal-title-vcenter'>
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    textAlign: 'center',
                }}
            >
                <p
                    style={{
                        margin: '0',
                    }}
                >
                    {props.msg}
                </p>
            </Modal.Body><br /><br /><br />
            <Modal.Footer
                style={{
                    justifyContent: 'center',
                    height: 'fit-content',
                    paddingBottom: '0',
                }}
            >
                <Button
                    onClick={props.onHide}
                    variant={props.variant}
                    style={{
                        fontSize: '1rem',
                        height: 'fit-content',
                    }}
                >
                    {props.footermsg}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComp;