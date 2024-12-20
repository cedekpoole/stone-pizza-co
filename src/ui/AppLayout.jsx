import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import ScrollToTop from "../utils/ScrollToTop";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-[calc(100vh-4rem)] font-inter">
      <ScrollToTop />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="container mx-auto">
          <Outlet />
        </main>
      )}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
