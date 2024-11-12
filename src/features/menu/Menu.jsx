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
      <ul className="mt-7 flex flex-col gap-4">
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
