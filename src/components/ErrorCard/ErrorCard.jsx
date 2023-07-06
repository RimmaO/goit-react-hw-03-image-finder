const ErrorCard = ({ children }) => {
  return (
    <div className="card">
      <h5 className="card-title">Error</h5>
      <p className="card-text">{children}</p>
    </div>
  );
};
export default ErrorCard;
