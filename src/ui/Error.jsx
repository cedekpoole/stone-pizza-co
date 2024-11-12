import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="container mx-auto min-h-[calc(100vh-4rem)] space-y-8 p-4">
      <h1 className="font-syne text-3xl font-semibold tracking-wide">
        Something went wrong!
      </h1>
      <p className="text-[#BAB2E5]">{error.data || error.message}...</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
