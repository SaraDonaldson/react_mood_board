import React from 'react'





function UserDashboard() {

let userId= localStorage.getItem("userId")


  return (
    <div>UserDashboard {userId}</div>
  )
}

export default UserDashboard