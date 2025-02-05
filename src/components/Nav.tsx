import Profile from "./Profile";

const Nav = () => {
  return (
    <div className="flex justify-around">
      <img src="/src/assets/logo2.png" />
      <h1 className="text-2xl">Task.io</h1>
      <Profile name="Rohith" />
    </div>
  );
};

export default Nav;
