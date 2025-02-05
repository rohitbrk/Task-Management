import Profile from "./Profile";

const Nav = () => {
  return (
    <div className="flex justify-around">
      <img src="/logo.png" />
      <h1 className="text-3xl font-bold">Task.io</h1>
      <Profile name="Rohith" />
    </div>
  );
};

export default Nav;
