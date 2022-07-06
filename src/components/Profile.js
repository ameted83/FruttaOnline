import { useSelector } from "react-redux";
import { logOutUser } from "../states/signUpSlice";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Profile = () => {
  const dispatch = useDispatch();
  const myUser = useSelector((state) => state.user.users);
  console.log(myUser);
  return (
    <div className=" text-[15px] flex text-center items-center pt-2 px-10">
      <AccountCircleIcon /> {myUser[0]?.name}
      <button
        className=" mx-4 hover:bg-red-700 "
        onClick={() => dispatch(logOutUser())}
      >
        <ExitToAppIcon />
      </button>
    </div>
  );
};

export default Profile;
