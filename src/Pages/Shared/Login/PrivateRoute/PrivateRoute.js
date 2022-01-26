import Spinner from "react-bootstrap/Spinner";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import useFirebase from "../../../../hooks/useFirebae";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  let location = useLocation();
  if (isLoading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
