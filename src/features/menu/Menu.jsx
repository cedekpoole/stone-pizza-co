import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiMenu";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <h1 className="text-center font-syne text-2xl font-semibold uppercase">
        Menu
      </h1>
      <ul className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
