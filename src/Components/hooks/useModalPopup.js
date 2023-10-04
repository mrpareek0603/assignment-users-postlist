import { useRef, useState } from "react";
import styles from "./ModalPopup.module.css";
const useModalPopup = () => {
  const [showModal, setshowModal] = useState(false);
  const modalref = useRef(null);
  const closeModal = (event) => {
    event.stopPropagation();

    setshowModal(false);
  };

  function displaymodal(data) {
    return (
      <>
        {showModal && (
          <div
            ref={modalref}
            onClick={closeModal}
            className={styles.modalwrapper}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={styles.modalcontent}
            >
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          </div>
        )}
      </>
    );
  }
  return { showModal, setshowModal, displaymodal };
};
export default useModalPopup;
