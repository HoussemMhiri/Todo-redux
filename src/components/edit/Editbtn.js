import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { edits } from "../../redux/actions";

const Editbtn = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(el.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edits(el.id, edit));
    handleClose();
  };

  const styles = {
    color: "white",
    border: "none",
    padding: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "none",
  };

  return (
    <div>
      <Button style={styles} variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task:</Form.Label>
              <Form.Control
                value={edit}
                type="text"
                autoFocus
                onChange={(e) => setEdit(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Editbtn;
