interface Props {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" onClick={onClose}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
