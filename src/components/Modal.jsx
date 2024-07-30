import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children }) {
  const ref = useRef(null);

  if (!ref.current) {
    ref.current = document.createElement('div');
  }

  useEffect(() => {
    const myRef = ref.current;
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(myRef);

    return () => modalRoot.removeChild(myRef);
  }, []);

  return createPortal(<div>{children}</div>, ref.current);
}

export default Modal;
