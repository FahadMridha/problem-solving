import React, { useState } from "react";
import OpenModal from "./firstModal/OpenModal";

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const [contactsInfo, setContactsInfo] = useState([]);
  const [region, setRegion] = useState("");
  const handlerModal = (contacts) => {
    if (contacts == "us-contacts") {
      //   console.log(contacts);
      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setContactsInfo(data.results);
          setShow(true);
        });
      setRegion("United States Contacts");

      return;
    }
    fetch("https://contact.mediusware.com/api/contacts/?page=1")
      .then((res) => res.json())
      .then((data) => {
        setContactsInfo(data.results);
        setShow(true);
      });
    setRegion("All contacts");
  };
  // console.log(contactsInfo);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => handlerModal("all-contacts")}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => handlerModal("us-contacts")}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>

          <OpenModal
            show={show}
            setShow={setShow}
            contactsInfo={contactsInfo}
            setContactsInfo={setContactsInfo}
            region={region}
            handlerModal={handlerModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Problem2;
