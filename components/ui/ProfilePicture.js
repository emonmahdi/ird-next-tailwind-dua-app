import Image from "next/image";
import profileImg from "@/assets/profile.png";

const ProfilePicture = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Image
          src={profileImg}
          className="w-[25%] mb-2"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
