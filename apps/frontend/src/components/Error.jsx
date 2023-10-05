import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return <p>Error: {error.statusText || error.message}</p>;
}

export default Error;
