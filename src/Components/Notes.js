import React from "react";
import Note from "./Note.js";
import {createUseStyles} from "react-jss";
import marked from "marked";

const useStyles = createUseStyles({
  notes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

function Notes(props) {
  console.log("notesss", props);
  const classes = useStyles();
  let notesList = props.notes.map((el, idx) =>
    el.noteStatus != "DELETED" ? (
      <Note
        key={idx}
        noteId={idx}
        noteStatus={el.noteStatus}
        text={el.text}
        deleteNote={props.deleteNote}
        editNote={props.editNote}
        appearNote={props.appearNote}
        appearAnim={el.appeared ? false : true}
      />
    ) : (
      ""
    )
  );

  return <div className={classes.notes}>{notesList}</div>;
}

export default Notes;
