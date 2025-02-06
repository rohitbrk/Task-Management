import Profile from "./Profile";

const Nav = () => {
  return (
    <div className="m-2 flex justify-around">
      <h1 className="text-3xl font-bold">Task.io</h1>
      <Profile name="John" />
    </div>
  );
};

export default Nav;
