import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiMenu";

function Menu() {
  const menu = useLoaderData();
  return <div className="text-2xl">MENU</div>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
