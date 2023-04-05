const Modal = ({ children, shouldShow, onclose: onRequestClose }) => {
  return shouldShow ? (
    <div className="modal-background" onClick={() => onRequestClose()}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
