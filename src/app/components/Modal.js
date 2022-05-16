import { Modal, Button } from "@themesberg/react-bootstrap";

export const ModalConfirmBeforeSubmit = ({nameExam, onSubmit, warning, ...props}) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {nameExam}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Submit Exam Test</h4>
            <p>
             { warning}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={props.onHide}>Close</Button>
            <Button variant='primary' onClick={onSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
}
 
