import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.data}</h1>
      <h1 style={{ color: "green" }}>{error.status}</h1>
      <h1 style={{ color: "red" }}>{error.statusText}</h1>
    </div>
  );
};

export default Error;
