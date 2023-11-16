import React from 'react'
import MyBoards from '../Components/Dashboard/MyBoards'
import '../Styles/myBoards.css'





function UserDashboard() {

let userId= localStorage.getItem("userId")


  return (
    <div>UserDashboard {userId}
    
    <MyBoards/>
    
    </div>
  )
}

export default UserDashboard