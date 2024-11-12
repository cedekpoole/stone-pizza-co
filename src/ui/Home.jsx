import CreateUser from "../features/user/CreateUser";
import Hero from "../assets/Hero.svg";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="ml-0 flex flex-col items-center gap-6 sm:ml-3 md:ml-0">
        <h1 className="pt-10 font-syne text-4xl font-bold sm:text-5xl">
          Stone cold pizza...{" "}
          <span className="mt-3 block text-[#BAB2E5] sm:mt-5">
            Right to your doorstep.
          </span>
        </h1>
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu">Order Now</Button>
        )}
      </div>
      <div className="order-last mt-5 flex w-full items-center justify-center sm:order-none sm:mt-0">
        <img
          src={Hero}
          alt="Hero"
          className="h-8/12 mx-auto w-8/12 object-contain"
        />
      </div>
    </div>
  );
}

export default Home;
