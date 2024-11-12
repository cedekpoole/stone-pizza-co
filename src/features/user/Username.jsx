import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const user = useSelector(getUsername);
  if (user === "") {
    return null;
  }
  return (
    <div className="hidden text-xs font-semibold uppercase tracking-wide md:block">
      {user}
    </div>
  );
}

export default Username;
