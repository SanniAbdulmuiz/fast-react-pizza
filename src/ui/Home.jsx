import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="text-xl text-yellow-500 font-semibold text-center">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
