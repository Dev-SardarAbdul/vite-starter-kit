
const ErrorMessage = ({error}:{error:any}) => {
    return (
      <>
       {error && (
          <p
            className="help is-danger"
            style={{ color: "red", fontSize: "0.9rem" }}
          >
            *{error}
          </p>
        )}
      </>
    );
  };
  
  export default ErrorMessage;
  