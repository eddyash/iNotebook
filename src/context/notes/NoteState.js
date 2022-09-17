import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  //   const s1 = {
  //     name: "Aadi",
  //     class: "12b",
  //   };
  //   const [state, setState] = useState(s1);

  //   const update = () => {
  //     setTimeout(() => {
  //       setState({
  //         name: "Carry",
  //         class: "10a",
  //       });
  //     }, 1000);
  //   };

  return (
    // <NoteContext.Provider value={{ state, update }}>
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
