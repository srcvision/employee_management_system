import React, { useContext,useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const  Header = (props) => {
  // const employeeName = useContext(AuthContext)
  // const [username, setUsername] = useState(" ")
  // if(!data){
  //   setUsername("Admin")
  // } else{
  //   setUsername(data.firstname)
  // }
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", 'true');
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold ">
        Hello,<br/> <span className="text-4xl">Saurav,👋</span>
      </h1>
      <button
      onClick={logoutUser}
      className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl hover:opacity-90"
    >
      Logout
    </button>
    </div>
  );
};

export default Header;
