import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children, isModalOpened, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (isModalOpened) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isModalOpened]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {isModalOpened ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
