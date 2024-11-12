import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const user = useSelector(getUsername);
  if (user === "") {
    return null;
  }
  return (
    <div className="hidden text-sm font-semibold uppercase md:block">
      {user}
    </div>
  );
}

export default Username;
