import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children, isModalOpened }) {
  const dialog = useRef();

  useEffect(() => {
    if (isModalOpened) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isModalOpened]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
