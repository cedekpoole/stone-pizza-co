import CreateUser from "../features/user/CreateUser";
import Hero from "../assets/Hero.svg";

function Home() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-6">
        <h1 className="pt-10 font-syne text-2xl sm:text-5xl font-bold">
          Stone cold pizza...{" "}
          <span className="block mt-3 sm:mt-5 text-[#BAB2E5]">
            Right to your doorstep.
          </span>
        </h1>
        <CreateUser />
      </div>
      <div>
        <img
          src={Hero}
          alt="Hero"
          className="w-8/12 h-8/12 col-span-2 object-contain mx-auto hidden sm:block"
        />
      </div>
    </div>
  );
}

export default Home;
