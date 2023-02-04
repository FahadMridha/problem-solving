import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const OpenModal = ({
  show,
  setShow,
  contactsInfo,
  setContactsInfo,
  region,
  handlerModal,
}) => {
  const [checked, setChecked] = useState(false);
  const handlerEvenContacts = (evenContacts) => {
    // console.log(evenContact);
    const EvenContacts = evenContacts.filter((contact) => contact.id % 2 === 0);
    // console.log(EvenContacts);
    setContactsInfo(EvenContacts);
    setChecked(!checked);
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-center text-info text-uppercase mb-3">
            {region === "All contacts" ? "Modal-A" : "Modal-B"}
            <p className="text-text-center text-success text-sm">{region}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal">
            <div className=" d-flex justify-content-center gap-3">
              <Button
                onClick={() => handlerModal("all-contacts")}
                className="mx-2"
                style={{ backgroundColor: "#46139f" }}
              >
                All Contacts
              </Button>
              <div className="vr" />
              <Button
                onClick={() => handlerModal("us-contacts")}
                style={{ backgroundColor: "#ff7f50" }}
              >
                US Contacts
              </Button>
            </div>
            <Button
              className=" ms-auto"
              style={{
                border: "2px solid #46139f",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => setShow(false)}
            >
              Close
            </Button>
          </Stack>
          <div className="text-center my-2">
            {contactsInfo.length > 0 &&
              contactsInfo.map((contact, index) => (
                <li key={index}>{contact.phone}</li>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <InputGroup className="mb-3">
            <InputGroup.Text>Only even</InputGroup.Text>
            <InputGroup.Checkbox
              onClick={() => handlerEvenContacts(contactsInfo)}
            />
          </InputGroup>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OpenModal;
