import React from "react";
import SelectedMoodboard from "./SelectedMoodboard";
import ThumbGrid from "./ThumbGrid";
import "./Moodboards.css";


const Moodboards = (props) => {
  return (
    <div>
      <h3>All Moodboards</h3>
      <div className="container text-center">
        <div className="row">
          <div className="col-10">
            <SelectedMoodboard board1={props.board} />
          </div>
          <div className="col-2">
            <ThumbGrid
              showBoardCb1={props.showBoardCb}
              moodboardName={Array.from(
                new Set(props.moodboards.map((m) => m.name))
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moodboards;
