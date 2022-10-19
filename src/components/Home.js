import Notes from "./Notes";
import React from "react";

const home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default home;
