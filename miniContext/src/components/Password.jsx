
import React, {useContext} from "react";
import UserContext from "../context/UserContext";


function Password() {
     const {user} = useContext(UserContext)


  return <div> Password is {user.username}   </div>
}

export default Password

