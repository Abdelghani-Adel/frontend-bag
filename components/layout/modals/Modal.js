import { useState } from "react";

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      {shouldShow && (
        <div className="modal-background" onClick={() => setShouldShow(false)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
