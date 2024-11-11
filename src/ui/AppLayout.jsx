import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-between">
      <Header />
      {isLoading ? (
        <Loader fullscreen={true} />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
