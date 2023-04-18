import { Button, Container} from "@material-ui/core";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: 'gray'
  },
    content: {
      // width:"800px",
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "40%",
      zIndex: 1300,
    },
  };

export default function ModalCheck() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


    return(
      <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal style={customStyles}
     
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div    className="customeStyles">
        <h2>Hello Modal</h2>
        <button onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>

    <style jsx>{`
            .customeStyles{
              width:300px;
              border: 1px solid black;
              height:200px;

            }
            .button{
                z-index: 10;
                position:fixed;
            }
            .backGround{
                position:fixed;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .5);
                z-index: -1;
            }
            .backGround:active{
               display:none;
            }
			`}</style>
        </div>
    )
}