import ProfileSvg from "../svg/ProfileSvg";

const Profile = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <ProfileSvg />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Profile;
