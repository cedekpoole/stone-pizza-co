import CreateUser from "../features/user/CreateUser";
import Hero from "../assets/Hero.svg";

function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-col items-center gap-6 ml-0 sm:ml-3 md:ml-0">
        <h1 className="pt-10 font-syne text-4xl sm:text-5xl font-bold">
          Stone cold pizza...{" "}
          <span className="block mt-3 sm:mt-5 text-[#BAB2E5]">
            Right to your doorstep.
          </span>
        </h1>
        <CreateUser />
      </div>
      <div className="flex justify-center items-center w-full order-last sm:order-none mt-5 sm:mt-0">
        <img
          src={Hero}
          alt="Hero"
          className="w-8/12 h-8/12 object-contain mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
