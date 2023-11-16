import React from 'react'
import myBoardsCard from  './myBoardsCard.jsx'

function MyBoards() {


  return (
    <div className='my-boards'>
        <h2>My Boards</h2>
       <div className='my-boards-container'>
        <myBoardsCard />
        <myBoardsCard />
        <myBoardsCard />
        < myBoardsCard />
        </div>
    </div>
  )
}

export default MyBoards;
