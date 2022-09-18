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

  const notesInitial = [
    {
      _id: "63261290a2330f762445a36d",
      user: "62ff980b39ba23e357c10bc5",
      title: "My Title",
      description: "My Description is very nice",
      tag: "personal",
      date: "2022-09-17T18:31:44.164Z",
      __v: 0,
    },
    {
      _id: "63261290a2330f762445a36d",
      user: "62ff980b39ba23e357c10bc5",
      title: "My Title",
      description: "My Description is very nice",
      tag: "personal",
      date: "2022-09-17T18:31:44.164Z",
      __v: 0,
    },
    {
      _id: "63261290a2330f762445a36d",
      user: "62ff980b39ba23e357c10bc5",
      title: "My Title",
      description: "My Description is very nice",
      tag: "personal",
      date: "2022-09-17T18:31:44.164Z",
      __v: 0,
    },
    {
      _id: "63261290a2330f762445a36d",
      user: "62ff980b39ba23e357c10bc5",
      title: "My Title",
      description: "My Description is very nice",
      tag: "personal",
      date: "2022-09-17T18:31:44.164Z",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(notesInitial);

  return (
    // <NoteContext.Provider value={{ state, update }}>
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
